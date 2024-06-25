import LazyLoadImage from "@/components/Image";
import { Card, GridItem, SimpleGrid } from "@chakra-ui/react";

interface WardrobePanelProps {
  womenWardrobeData: {
    image: string;
    title: string;
  }[];
}

function WomenWardrobePanel({ womenWardrobeData }: WardrobePanelProps) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={5}>
      {womenWardrobeData?.map((data, index) => (
        <GridItem colSpan={1} key={index}>
          <Card h={"80%"} shadow={"none"} borderRadius={0} bg={"#D9D9D9"}>
            <LazyLoadImage id={index} src={data.image} alt={data.title} />
          </Card>
        </GridItem>
      ))}
    </SimpleGrid>
  );
}

export default WomenWardrobePanel;
