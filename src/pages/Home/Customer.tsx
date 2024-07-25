import {
  Box,
  Container,
  GridItem,
  HStack,
  Icon,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Headset, ShoppingBag, Truck } from "lucide-react";

const customerData = [
  {
    title: "Delivery",
    description: "Ensures the delivery of the product on time",
    icon: (
      <Icon as={Truck} bg={"primary"} stroke={"primary.500"} boxSize={10} />
    ),
  },
  {
    title: "Customer Support",
    description:
      "Providing immediate assistance to resolve queries and improve the shopping experience",
    icon: (
      <Icon as={Headset} bg={"primary"} stroke={"primary.500"} boxSize={10} />
    ),
  },
  {
    title: "Easy Checkout",
    description:
      "Simplifying the purchase process to reduce cart abandonment rates.",
    icon: (
      <Icon
        as={ShoppingBag}
        bg={"primary"}
        stroke={"primary.500"}
        boxSize={10}
      />
    ),
  },
];

function Customer() {
  return (
    <Container
      as={"section"}
      id="customer"
      maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
    >
      <SimpleGrid
        columns={{ base: 1, sm: 2, xl: 3 }}
        gap={{ base: 4, sm: 6, md: 8, lg: 10 }}
      >
        {customerData?.map((data, index) => (
          <GridItem key={index} colSpan={1}>
            <HStack align={"center"} gap={4}>
              {data.icon}

              <Box>
                <Text
                  fontSize={{
                    base: "12px",
                    sm: "18px",
                    md: "22px",
                    lg: "26px",
                  }}
                  fontWeight={600}
                  textColor={"#9E9E9E"}
                >
                  {data.title}
                </Text>
                <Text
                  display={{ base: "none", md: "block" }}
                  fontSize={"13px"}
                  fontWeight={500}
                  textColor={"#9E9E9E"}
                >
                  {data.description}
                </Text>
              </Box>
            </HStack>
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default Customer;
