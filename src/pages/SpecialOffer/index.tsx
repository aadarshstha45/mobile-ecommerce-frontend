import ItemDisplay from "@/components/ItemDisplay";
import { Container, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { newArrivalsData } from "../Home/NewArrivals";

const SpecialOffer = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  return (
    <Container
      as={"section"}
      id="special_offer"
      maxW={{ base: "98vw", md: "95vw", lg: "85vw" }}
      py={10}
    >
      <Flex flexDir={"column"} gap={10}>
        <Heading>Special Offer</Heading>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1300: 4 }}
        >
          <Masonry gutter="30px">
            {newArrivalsData.map((data) => (
              <ItemDisplay
                key={data.id}
                hoveredId={hoveredId}
                setHoveredId={setHoveredId}
                data={data}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </Flex>
    </Container>
  );
};

export default SpecialOffer;
