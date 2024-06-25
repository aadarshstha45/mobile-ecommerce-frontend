import {
  Box,
  Container,
  Flex,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import MenWardrobePanel from "./Wardrobe/MenWardrobePanel";
import WomenWardrobePanel from "./Wardrobe/WomenWardrobePanel";

interface WardrobeProps {
  menWardrobeData: {
    image: string;
    title: string;
  }[];
  womenWardrobeData: {
    image: string;
    title: string;
  }[];
}

function Wardrobe({ menWardrobeData, womenWardrobeData }: WardrobeProps) {
  return (
    <Box as="section" id="wardrobe" bg={"#D9D9D9"}>
      <Container
        maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
        py={10}
      >
        <Flex flexDir={"column"} gap={10}>
          <Text
            textAlign={"center"}
            fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}
            fontWeight={600}
            textColor={"#555"}
          >
            Build your wardrobe with our vast array of clothes for both mens &
            womens
          </Text>
          <Tabs
            onChange={(index) => console.log(index)}
            isLazy
            variant={"unstyled"}
            size={"lg"}
            align="center"
          >
            <TabList>
              <Tab>Men</Tab>
              <Tab>Women</Tab>
            </TabList>
            <TabIndicator
              mt="-1.5px"
              height="4px"
              bg="primary.500"
              borderRadius="2px"
            />
            <TabPanels>
              <TabPanel>
                <MenWardrobePanel menWardrobeData={menWardrobeData} />
              </TabPanel>
              <TabPanel>
                <WomenWardrobePanel womenWardrobeData={womenWardrobeData} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Container>
    </Box>
  );
}

export default Wardrobe;
