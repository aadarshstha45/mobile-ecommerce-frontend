import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
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
    <Tabs isLazy position="relative" variant="unstyled">
      <TabList whiteSpace={"nowrap"} overflowX={"auto"} overflowY={"hidden"}>
        {TabItems.map((tab, index) => (
          <Tab
            _selected={{
              borderBottomColor: "primary.500",
            }}
            borderBottom={"4px solid"}
            borderBottomColor={"primary.50"}
            key={index}
            fontSize={{ base: "sm", md: "md", xl: "lg" }}
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
  );
};

export default MyReview;
