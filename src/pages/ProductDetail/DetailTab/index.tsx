import {
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

interface DetailTabProps {
  description?: string;
}

const DetailTab = ({ description }: DetailTabProps) => {
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
        height="5px"
        bg="primary.500"
        borderRadius="1px"
      />
      <TabPanels textAlign={"center"}>
        <TabPanel>
          <p>{description}</p>
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
