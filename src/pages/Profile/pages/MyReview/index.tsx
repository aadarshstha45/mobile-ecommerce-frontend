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
      <TabList>
        {TabItems.map((tab, index) => (
          <Tab
            key={index}
            _selected={{
              textColor: "white",
              bg: "primary.500",
              borderRadius: 2,
            }}
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
