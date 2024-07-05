/* eslint-disable @typescript-eslint/no-explicit-any */
import NoImage from "@/assets/images/NoImage.png";
import { TextInput } from "@/components/Form/TextInput";
import { IStepProps } from "@/utils/IStepProps";
import { useOrderStore } from "@/utils/store";
import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  HStack,
  Heading,
  Img,
  SimpleGrid,
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
  const { control, handleSubmit } = useForm({
    defaultValues: {
      promoCode: "",
    },
  });

  const { setStepData } = useOrderStore();

  useEffect(() => {
    const cartItems = sessionStorage.getItem("cartItems");
    if (cartItems) {
      console.log("cartItems", JSON.parse(cartItems));
      setItems(JSON.parse(cartItems));
      const totalPrice = items.reduce(
        (acc: number, item: any) => acc + item.size.price * item.quantity,
        0
      );
      setTotalPrice(totalPrice);
    }
  }, [location.pathname]);

  const promoSubmit = (data: any) => {
    console.log(data);
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
          price: item?.size?.price,
          size_id: item?.size?.id,
          color_id: item?.color?.id,
          total: item?.size?.price * item?.quantity,
        })),
        total_amount: totalPrice,
      });
    } else {
      toast.error("No items in the cart");
    }
    stepProps.nextStep();
  };

  return (
    <Container maxW={{ base: "99vw", sm: "95vw", md: "90vw", lg: "85vw" }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} alignItems={"center"}>
        <GridItem
          colSpan={1}
          w={isLessThan469 ? "full" : { base: "100%", sm: "80%", lg: "70%" }}
        >
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
                        <Text
                          fontWeight={600}
                          noOfLines={2}
                          fontSize={{ base: "12px", md: "14px", xl: "16px" }}
                        >
                          {item.name}
                        </Text>
                        {item.size && (
                          <Text fontSize={"md"}>Size: {item.size.name}</Text>
                        )}
                        {item.color && (
                          <Text fontSize={"md"}>Color: {item.color.name}</Text>
                        )}
                      </Flex>

                      <Box>
                        <Text
                          fontWeight={600}
                          fontSize={{ base: "12px", md: "14px", xl: "16px" }}
                        >
                          Rs.
                          {item.size
                            ? item.size.price * item.quantity
                            : item.product.price * item.quantity}
                        </Text>
                      </Box>
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
          justifySelf={{ md: "end" }}
        >
          <form onSubmit={handleSubmit(promoSubmit)}>
            <HStack py={2} align={"center"}>
              <TextInput
                name="promoCode"
                control={control}
                label={"Promo Code"}
                placeholder={"Enter Promo Code"}
              />
              <Button
                type="submit"
                mt={4}
                fontSize={{ sm: "14px", md: "16px" }}
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
                  fontWeight={600}
                  fontSize={{ base: "14px", md: "16px", xl: "18px" }}
                >
                  Rs. {item.product.name}
                </Text>
                <Text
                  fontWeight={600}
                  textColor={"primary.500"}
                  fontSize={{ base: "12px", md: "14px", xl: "16px" }}
                >
                  Rs. {item.size?.price * item.quantity}
                </Text>
              </HStack>
            ))}
          <HStack justify={"space-between"} py={2}>
            <Heading fontSize={"lg"}>Discount</Heading>
            <Heading textColor={"primary.500"} fontSize={"lg"}>
              - Rs. 500
            </Heading>
          </HStack>

          <Box w={"full"} h={"1px"} bg={"#939292"} />
          <HStack justify={"space-between"} py={2}>
            <Heading fontSize={"lg"}>Subtotal</Heading>
            <Heading textColor={"primary.500"} fontSize={"lg"}>
              Rs. {totalPrice}
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
    </Container>
  );
};

export default ShoppingBag;
