/* eslint-disable @typescript-eslint/no-explicit-any */
import Jean from "@/assets/images/NewArrivals/jean1.png";
import TShirt from "@/assets/images/SalesImage/shirt 1.png";
import { TextInput } from "@/components/Form/TextInput";
import { IStepProps } from "@/utils/IStepProps";
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
import { useForm } from "react-hook-form";
const data = [
  {
    id: 1,
    name: "Jean ",
    price: 100,
    size: "M",
    color: "Blue",
    image: Jean,
    quantity: 1,
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 50,
    size: "M",
    color: "Black",
    image: TShirt,
    quantity: 2,
  },
];
const ShoppingBag = ({ stepProps }: IStepProps) => {
  const [isLessThan469] = useMediaQuery("(max-width: 469px)");
  const { control, handleSubmit } = useForm({
    defaultValues: {
      promoCode: "",
    },
  });

  const promoSubmit = (data: any) => {
    console.log(data);
  };

  const handleNextPage = () => {
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
            {data?.map((item) => (
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
                      src={item.image}
                      alt={item.name}
                      objectFit={"cover"}
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
                    <Text fontSize={"md"}>Size: {item.size}</Text>
                    <Text fontSize={"md"}>Color: {item.color}</Text>
                  </Flex>

                  <Box>
                    <Heading fontSize={"lg"}>Rs. {item.price}</Heading>
                  </Box>
                </Flex>
              </Box>
            ))}
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
          {data?.map((item) => (
            <HStack key={item.id} justify={"space-between"} py={2}>
              <Heading fontSize={"lg"}>{item.name}</Heading>
              <Heading textColor={"primary.500"} fontSize={"lg"}>
                Rs. {item.price}
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
