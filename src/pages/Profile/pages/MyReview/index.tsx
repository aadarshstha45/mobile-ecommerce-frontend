import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import Reviewed from "./Reviewed";
import ToBeReviewed from "./ToBeReviewed";

const TabItems = [
  {
    name: "To Review",
  },
  {
    name: "Reviewed",
  },
];

const MyReview = () => {
  return (
    <Flex w={"full"} flexDir={"column"} gap={4}>
      <Text fontSize={"xl"}>My Reviews</Text>
      <Tabs isLazy position="relative" variant="unstyled">
        <TabList whiteSpace={"nowrap"} overflowX={"auto"} overflowY={"hidden"}>
          {TabItems.map((tab, index) => (
            <Tab
              key={index}
              _selected={{
                borderBottomColor: "primary.500",
              }}
              borderBottom={"6px solid"}
              borderBottomColor={"primary.50"}
              fontSize={{ base: "sm", md: "md", xl: "lg" }}
              whiteSpace={"nowrap"}
              transition={"border-bottom 0.2s ease-in-out"}
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>

        <TabPanels mt={8}>
          <TabPanel p={0}>
            <ToBeReviewed />
          </TabPanel>
          <TabPanel p={0}>
            <Reviewed />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default MyReview;
