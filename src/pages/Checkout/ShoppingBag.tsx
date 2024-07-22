/* eslint-disable @typescript-eslint/no-explicit-any */
import { useIsPromoCodeValid } from "@/api/functions/Order";
import NoImage from "@/assets/images/NoImage.png";
import { TextInput } from "@/components/Form/TextInput";
import { IStepProps } from "@/utils/IStepProps";
import { useOrderStore } from "@/utils/store";
import {
  Box,
  Button,
  Flex,
  GridItem,
  HStack,
  Heading,
  Img,
  SimpleGrid,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const ShoppingBag = ({ stepProps }: IStepProps) => {
  const location = useLocation();
  const [items, setItems] = useState<any[]>([]);
  const [isLessThan469] = useMediaQuery("(max-width: 469px)");
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [promoCode, setPromoCode] = useState("");
  const [promoErrorMessages, setPromoErrorMessages] = useState<string>("");
  const { control, handleSubmit } = useForm({
    defaultValues: {
      total_amount: "",
      promo_code: "",
    },
  });

  const PromoCode = useIsPromoCodeValid();
  const { setStepData } = useOrderStore();

  useEffect(() => {
    const cartItems = sessionStorage.getItem("cartItems");
    if (cartItems) {
      const items = JSON.parse(cartItems);
      console.log("Items", items);
      setItems(items);
      let totalPrice = 0;
      items.forEach((item: any) => {
        totalPrice += item.totalPrice * item.quantity;
      });
      let discountedPrice = 0;
      items.forEach((item: any) => {
        discountedPrice +=
          item.discountedPrice > 0
            ? item.discountedPrice * item.quantity
            : item.totalPrice * item.quantity;
      });
      setTotalPrice(totalPrice);
      setDiscountedPrice(discountedPrice);
      setTotalAfterDiscount(discountedPrice);
    }
  }, [location.pathname]);

  const promoSubmit = async (data: any) => {
    try {
      const response = await PromoCode.mutateAsync({
        ...data,
        total_amount: discountedPrice > 0 ? discountedPrice : totalPrice,
      });
      if (response.data.valid) {
        console.log("Promo Code Applied", response.data);
        setPromoCode(data.promo_code);
        const discount_type = response.data.type;
        const discount_rate = parseFloat(response.data.rate);
        const max_discount = parseFloat(response.data.max_discount);
        if (discount_type === "percentage") {
          const discount =
            discountedPrice > 0
              ? (discountedPrice * discount_rate) / 100
              : (totalPrice * discount_rate) / 100;
          console.log("Discount", discount);
          if (discount >= max_discount) {
            setDiscount(max_discount);
            setDiscountedPrice(
              discountedPrice > 0
                ? discountedPrice - max_discount
                : totalPrice - max_discount
            );
            setTotalAfterDiscount(
              discountedPrice > 0
                ? discountedPrice - max_discount
                : totalPrice - max_discount
            );
            return;
          } else {
            setDiscount(discount);
            setDiscountedPrice(
              discountedPrice > 0
                ? discountedPrice - discount
                : totalPrice - discount
            );
            setTotalAfterDiscount(
              discountedPrice > 0
                ? discountedPrice - discount
                : totalPrice - discount
            );

            return;
          }
        } else {
          setDiscount(discount_rate);

          setTotalAfterDiscount(
            discountedPrice > 0
              ? discountedPrice - discount_rate
              : totalPrice - discount
          );
          return;
        }
      } else {
        setPromoErrorMessages(response.data.error);
        // Handle invalid promo code if needed
        setDiscount(0);
      }
    } catch (error) {
      console.error("Error applying promo code:", error);
      // Handle error if needed
      setDiscount(0);
    }
  };

  const handleNextPage = () => {
    const cartItems = sessionStorage.getItem("cartItems");
    if (cartItems && cartItems.length > 0) {
      const items = JSON.parse(cartItems);

      setStepData({
        order_items: items.map((item: any) => ({
          cart_id: item?.id,
          product_id: item?.product?.id,
          quantity: item?.quantity,
          discount: item.discountedPrice
            ? item.totalPrice - item.discountedPrice
            : 0,
          price: item.size ? item.size.price : item.product.price,
          size_id: item?.size?.id,
          color_id: item?.color?.id,
          total: item.discountedPrice ?? item.totalPrice,
        })),
        promo_discount: discount,
        total_amount: discountedPrice ?? totalPrice,
        promo_code: promoCode ?? null,
      });
      stepProps.nextStep();
    } else {
      toast.error("No items in the cart");
    }
  };

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={6} alignItems={"start"}>
      <GridItem colSpan={1}>
        <Flex flexDir={"column"} gap={4}>
          {items &&
            items.map((item: any) => {
              return (
                <Box key={item.id} borderBottom={"1px solid #939292"} py={6}>
                  <Flex
                    key={item.id}
                    gap={8}
                    // justify={"space-between"}
                    flexDir={isLessThan469 ? "column" : "row"}
                    align={isLessThan469 ? "start" : "center"}
                  >
                    <Box
                      borderRadius={"10px"}
                      overflow={"hidden"}
                      minW={isLessThan469 ? "100%" : "30%"}
                      w={isLessThan469 ? "100%" : "30%"}
                      h={"150px"}
                      border={"1px solid #939292"}
                    >
                      <Img
                        src={item.product.image ?? NoImage}
                        alt={item.product.name}
                        objectFit={item.product.image ? "cover" : "contain"}
                        objectPosition={"center"}
                        w={"100%"}
                        h={"100%"}
                      />
                    </Box>
                    <Flex
                      flexDir={"column"}
                      gap={3}
                      minW={isLessThan469 ? "100%" : "50%"}
                      w={isLessThan469 ? "100%" : "50%"}
                    >
                      <Text fontWeight={600} noOfLines={2} fontSize={"md"}>
                        {item.product.name}
                      </Text>
                      {item.size && (
                        <Text fontSize={"md"}>Size: {item.size.name}</Text>
                      )}
                      {item.color && (
                        <Text fontSize={"md"}>Color: {item.color.name}</Text>
                      )}
                    </Flex>

                    <Stack gap={0}>
                      <Text
                        fontWeight={600}
                        fontSize={{ base: "12px", md: "14px", xl: "16px" }}
                      >
                        Rs.
                        {item.discountedPrice > 0
                          ? item.discountedPrice
                          : item.totalPrice}
                      </Text>
                      <Text
                        alignSelf={"end"}
                        fontSize={{ base: "12px", md: "14px" }}
                      >
                        X {item.quantity}
                      </Text>
                    </Stack>
                  </Flex>
                </Box>
              );
            })}
        </Flex>
      </GridItem>
      <GridItem
        as={Flex}
        gap={2}
        flexDir={"column"}
        colSpan={1}
        maxW={{ md: "350px" }}
        justifySelf={{ md: "end" }}
      >
        <form onSubmit={handleSubmit(promoSubmit)}>
          <HStack py={2} align={"start"}>
            <TextInput
              name="promo_code"
              control={control}
              label={"Promo Code"}
              placeholder={"Enter Promo Code"}
              errorMessage={promoErrorMessages}
            />
            <Button
              type="submit"
              mt={7}
              fontSize={{ sm: "14px", md: "16px" }}
              fontWeight={400}
              colorScheme={"primary"}
              borderRadius={"2px"}
            >
              Apply
            </Button>
          </HStack>
        </form>
        {items &&
          items?.map((item: any) => (
            <HStack key={item.id} justify={"space-between"} py={2}>
              <Text
                noOfLines={2}
                fontWeight={500}
                fontSize={{ base: "14px", md: "16px", xl: "18px" }}
              >
                {item.product.name}
              </Text>
              <Text
                fontWeight={500}
                textColor={"primary.500"}
                fontSize={{ base: "12px", md: "14px", xl: "16px" }}
              >
                Rs.{" "}
                {item.discountedPrice > 0
                  ? item.discountedPrice * item.quantity
                  : item.totalPrice * item.quantity}
              </Text>
            </HStack>
          ))}
        <HStack justify={"space-between"} py={2}>
          <Heading fontSize={"lg"}>Discount</Heading>
          <Heading textColor={"primary.500"} fontSize={"lg"}>
            - Rs. {discount}
          </Heading>
        </HStack>

        <Box w={"full"} h={"1px"} bg={"#939292"} />
        <HStack justify={"space-between"} py={2}>
          <Heading fontSize={"lg"}>Subtotal</Heading>
          <Heading textColor={"primary.500"} fontSize={"lg"}>
            Rs. {totalAfterDiscount}
          </Heading>
        </HStack>

        <Button
          onClick={handleNextPage}
          colorScheme={"primary"}
          borderRadius={"2px"}
          mt={4}
        >
          Checkout
        </Button>
      </GridItem>
    </SimpleGrid>
  );
};

export default ShoppingBag;
