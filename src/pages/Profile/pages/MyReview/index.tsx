import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Reviewed from "./Reviewed";
import ToBeReviewed from "./ToBeReviewed";

const MyReview = () => {
  return (
    <Tabs isLazy position="relative" variant="unstyled">
      <TabList>
        <Tab fontSize={{ base: "sm", md: "md", xl: "lg" }}>To Review</Tab>
        <Tab fontSize={{ base: "sm", md: "md", xl: "lg" }}>Reviewed</Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="4px"
        bg={"primary.500"}
        borderRadius="1px"
      />
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
