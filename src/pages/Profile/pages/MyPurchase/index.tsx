import { ReactDatePicker } from "@/components/Form";
import { convertDate } from "@/utils/convertDate";
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
import { lazy, useState } from "react";
import { useForm } from "react-hook-form";
const Orders = lazy(() => import("./Orders"));

const MyPurchase = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const { control } = useForm({
    defaultValues: {
      date: [startDate, endDate],
    },
  });
  const onChange = (dates: any) => {
    console.log(dates);
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Flex w={"full"} flexDir={"column"} gap={4}>
      <Flex justify={"space-between"} align={"center"}>
        <Text fontSize={"xl"}>My Orders</Text>
        <>
          <ReactDatePicker
            width={"fit-content"}
            handleChange={onChange}
            startDate={startDate}
            endDate={endDate}
            ranged
            name="date"
            isClearable={startDate !== "" || endDate !== ""}
            onClear={() => {
              setStartDate("");
              setEndDate("");
            }}
            control={control}
          />
        </>
      </Flex>
      <Tabs isLazy position="relative" variant="unstyled">
        <TabList>
          <Tab fontSize={{ base: "sm", md: "md", xl: "lg" }}>Pending</Tab>
          <Tab fontSize={{ base: "sm", md: "md", xl: "lg" }}>In Process</Tab>
          <Tab fontSize={{ base: "sm", md: "md", xl: "lg" }}>Shipped</Tab>
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
            <Orders
              status="pending"
              toDate={convertDate(endDate)}
              fromDate={convertDate(startDate)}
            />
          </TabPanel>
          <TabPanel p={0}>
            <Orders
              status="processing"
              toDate={convertDate(endDate)}
              fromDate={convertDate(startDate)}
            />
          </TabPanel>
          <TabPanel p={0}>
            <Orders
              status="shipped"
              toDate={convertDate(endDate)}
              fromDate={convertDate(startDate)}
            />
          </TabPanel>
          <TabPanel p={0}>
            <Orders
              status="delivered"
              toDate={convertDate(endDate)}
              fromDate={convertDate(startDate)}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
};

export default MyPurchase;
