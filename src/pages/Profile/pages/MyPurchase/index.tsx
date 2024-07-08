import {
  Flex,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Delivered, InProcess } from "./Tabs";

const MyPurchase = () => {
  return (
    <Flex w={"full"} flexDir={"column"} gap={4}>
      <Text fontSize={"xl"}>My Purchases</Text>
      <Tabs isLazy position="relative" variant="unstyled">
        <TabList>
          <Tab fontSize={{ base: "sm", md: "md", xl: "lg" }}>InProcess</Tab>
          <Tab fontSize={{ base: "sm", md: "md", xl: "lg" }}>Delivered</Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="4px"
          bg={"primary.500"}
          borderRadius="1px"
        />
        <TabPanels mt={8}>
          <TabPanel p={0}>
            <InProcess />
          </TabPanel>
          <TabPanel p={0}>
            <Delivered />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default MyPurchase;
