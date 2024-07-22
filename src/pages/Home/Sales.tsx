import { useFetchHomeSales } from "@/api/functions/Sales";
import { ArrowForward } from "@/assets/icons/ArrowForward";
import ItemDisplay, { columnBreakpoints } from "@/components/ItemDisplay";
import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function Sales() {
  const { data: salesData } = useFetchHomeSales();
  return (
    salesData && (
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

          {salesData.products.length > 0 && (
            <ResponsiveMasonry columnsCountBreakPoints={columnBreakpoints}>
              <Masonry gutter="30px">
                {salesData.products.map((item: any) => (
                  <ItemDisplay
                    key={item.id}
                    data={item}
                    discountPercent={salesData?.discount_percentage}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
        </Flex>
      </Container>
    )
  );
}

export default Sales;
