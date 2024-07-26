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
  specification?: string;
}

const tabList = [
  {
    id: 1,
    title: "Specification",
  },
  {
    id: 2,
    title: "Description",
  },
];

const DetailTab = ({ description, specification }: DetailTabProps) => {
  return (
    <Tabs
      colorScheme="primary"
      align="center"
      position="relative"
      variant="unstyled"
    >
      <TabList
        fontSize={{
          base: "12px",
          md: "14px ",
        }}
        justifySelf={"center"}
      >
        {tabList.map((tab) => (
          <Tab key={tab.id} fontSize={{ base: "16px", md: "18px" }}>
            {tab.title}
          </Tab>
        ))}
      </TabList>
      <TabIndicator
        mt="-1.5px"
        height="5px"
        bg="primary.500"
        borderRadius="1px"
      />
      <TabPanels textAlign={"center"}>
        <TabPanel>
          <p>{specification}</p>
        </TabPanel>
        <TabPanel>
          <p>{description}</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default DetailTab;
