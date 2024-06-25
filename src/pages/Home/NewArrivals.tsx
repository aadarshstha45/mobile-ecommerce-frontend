import { ArrowForward } from "@/assets/icons/ArrowForward";
import Jean11 from "@/assets/images/NewArrivals/jean1+1.png";
import Jean1 from "@/assets/images/NewArrivals/jean1.png";
import ItemDisplay from "@/components/ItemDisplay";
import { Box, Container, Flex, HStack, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const newArrivalsData = [
  {
    id: 1,
    hovered_image: Jean11,
    title: "Jean1",
    category: "jeans",
    averageRating: 4,
    originalPrice: 100,
    discountedPrice: 80,
    colorOptions: [
      {
        option: "#7469B6",
      },
      {
        option: "#AD88C6",
      },
      {
        option: "#E1AFD1",
      },
      {
        option: "#7469B6",
      },
    ],
  },
  {
    id: 2,
    image: Jean1,
    hovered_image: Jean11,
    title: "Jean2",
    category: "jeans",
    originalPrice: 400,
    discountedPrice: 300,
    averageRating: 4.2,
    colorOptions: [
      {
        option: "#1A4D2E",
      },
      {
        option: "#4F6F52",
      },
    ],
  },
  {
    id: 3,
    image: Jean1,
    hovered_image: Jean11,
    title: "Jean1",
    category: "jeans",
    originalPrice: 100,
    averageRating: 3.5,
  },
  {
    id: 4,
    image: Jean1,
    hovered_image: Jean11,
    title: "Jean1",
    category: "jeans",
    originalPrice: 100,
    discountedPrice: 80,
    averageRating: 4,
  },
];

function NewArrivals() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

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
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3, 1366: 4 }}
        >
          <Masonry gutter="30px">
            {newArrivalsData?.map((data) => (
              <ItemDisplay
                key={data.id}
                data={data}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Flex>
    </Container>
  );
}

export default NewArrivals;
