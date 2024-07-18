import { useFetchHomeSales } from "@/api/functions/Sales";
import { ArrowForward } from "@/assets/icons/ArrowForward";
import ItemDisplay from "@/components/ItemDisplay";
import {
  Box,
  Container,
  Flex,
  GridItem,
  HStack,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

function Sales() {
  const { data: salesData } = useFetchHomeSales();
  return (
    <Container
      as={"section"}
      id="sales"
      maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
    >
      <Flex flexDir={"column"} gap={10}>
        <Flex justify={"space-between"} align={"center"}>
          <HStack align={"center"}>
            <Box
              bg={
                "linear-gradient(180deg, rgba(156,200,252,1) 25%, rgba(0,62,221,1) 100%);"
              }
              h={"40px"}
              w={1}
            />
            <Text
              fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
              fontWeight={"bold"}
            >
              Sales and Offers
            </Text>
          </HStack>
          <HStack align={"center"} gap={1}>
            <Link
              fontWeight={600}
              textColor={"primary.500"}
              fontSize={{ base: "sm", md: "md" }}
            >
              See More
            </Link>
            <ArrowForward boxSize={{ base: 4, md: 5 }} />
          </HStack>
        </Flex>
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          gap={{ base: 1, sm: 5 }}
        >
          {salesData &&
            salesData.products.length > 0 &&
            salesData.products.map((item: any) => (
              <GridItem colSpan={1} key={item.id}>
                <ItemDisplay
                  data={item}
                  discountPercent={salesData?.discount_percentage}
                />
              </GridItem>
            ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
}

export default Sales;
