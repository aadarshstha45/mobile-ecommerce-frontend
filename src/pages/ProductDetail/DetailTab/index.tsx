import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const DetailTab = () => {
  return (
    <Tabs
      colorScheme="primary"
      align="center"
      position="relative"
      variant="unstyled"
    >
      <TabList justifySelf={"center"}>
        <Tab>ProductDetail</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="3px"
        bg="primary.500"
        borderRadius="1px"
      />
      <TabPanels textAlign={"center"}>
        <TabPanel>
          <p>
            Introducing our Breshka Regular Fit Jeans, the epitome of comfort,
            style, and versatility. Crafted with meticulous attention to detail,
            these jeans offer a perfect balance between classic design and
            contemporary flair. Designed to flatter every body type, our regular
            fit jeans feature a timeless silhouette that effortlessly
            complements any look. Whether you're dressing up for a night out or
            keeping it casual for a weekend adventure, these jeans provide the
            ideal foundation for your outfit.
          </p>
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
        <TabPanel>
          <p>three!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DetailTab;
