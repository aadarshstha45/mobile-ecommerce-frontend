import { ArrowForward } from "@/assets/icons/ArrowForward";
import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";

function NewArrivals() {
  return (
    <Container
      as={"section"}
      id="new_arrivals"
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
              New Arrivals
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
        {/* <ResponsiveMasonry columnsCountBreakPoints={columnBreakpoints}>
          <Masonry gutter="30px">
            {newArrivalsData?.map((data) => (
              <ItemDisplay key={data.id} data={data} />
            ))}
          </Masonry>
        </ResponsiveMasonry> */}
      </Flex>
    </Container>
  );
}

export default NewArrivals;
