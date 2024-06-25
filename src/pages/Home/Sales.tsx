import { ArrowForward } from "@/assets/icons/ArrowForward";
import LazyLoadImage from "@/components/Image";
import {
  Box,
  Card,
  Container,
  Flex,
  GridItem,
  HStack,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

interface SalesProps {
  salesData: any;
}

function Sales({ salesData }: SalesProps) {
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
          {salesData?.map((data: any) => (
            <GridItem colSpan={1} key={data.id}>
              <Card
                h={"80%"}
                p={0}
                shadow={"none"}
                borderRadius={0}
                bg={"#D9D9D9"}
              >
                <LazyLoadImage
                  id={data.id}
                  src={data.image}
                  alt={data.id.toString()}
                />
              </Card>
            </GridItem>
          ))}
        </SimpleGrid>
      </Flex>
    </Container>
  );
}

export default Sales;
