import { CheckoutIcon } from "@/assets/icons/Checkout";
import { CustomerSupport } from "@/assets/icons/CustomerSupport";
import { DeliveryIcon } from "@/assets/icons/DeliveryIcon";
import {
  Box,
  Container,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const customerData = [
  {
    title: "Delivery",
    description: "Ensures the delivery of the product on time",
    icon: <DeliveryIcon boxSize={16} />,
  },
  {
    title: "Customer Support",
    description:
      "Providing immediate assistance to resolve queries and improve the shopping experience",
    icon: <CustomerSupport boxSize={14} />,
  },
  {
    title: "Easy Checkout",
    description:
      "Simplifying the purchase process to reduce cart abandonment rates.",
    icon: <CheckoutIcon boxSize={14} />,
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
          <GridItem key={index} h={"100%"} colSpan={1}>
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
