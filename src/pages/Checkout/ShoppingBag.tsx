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
  const { control, handleSubmit } = useForm({
    defaultValues: {
      promoCode: "",
    },
  });

  const { setStepData } = useOrderStore();

  useEffect(() => {
    const cartItems = sessionStorage.getItem("cartItems");
    if (cartItems) {
      setItems(JSON.parse(cartItems));
    }
    console.log(cartItems);
  }, [location.pathname]);

  const promoSubmit = (data: any) => {
    console.log(data);
  };

  const handleNextPage = () => {
    const cartItems = sessionStorage.getItem("cartItems");
    {
      cartItems && cartItems?.length > 0
        ? items.map((items: any) =>
            setStepData({
              cart_id: items?.id,
              product_id: items?.product.id,
              quantity: items?.quantity,
              price: items?.product.price,
              size: items?.size.id,
              color: items?.color.id,
            })
          )
        : toast.error("No items in the cart");
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
                        <Heading noOfLines={2} fontSize={"lg"}>
                          {item.name}
                        </Heading>
                        <Text fontSize={"md"}>Size: {item.size.name}</Text>
                        <Text fontSize={"md"}>Color: {item.color.name}</Text>
                      </Flex>

                      <Box>
                        <Heading fontSize={"lg"}>
                          Rs. {item.product.price}
                        </Heading>
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
                <Heading fontSize={"lg"}>{item.product.name}</Heading>
                <Heading textColor={"primary.500"} fontSize={"lg"}>
                  Rs. {item.product.price}
                </Heading>
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
              Rs. 500
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
