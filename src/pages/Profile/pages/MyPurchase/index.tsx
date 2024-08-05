import { ReactDatePicker } from "@/components/Form";
import { convertDate } from "@/utils/convertDate";
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { lazy, useState } from "react";
import { useForm } from "react-hook-form";
const Orders = lazy(() => import("./Orders"));

const TabItems = [
  {
    name: "Pending",
    status: "pending",
  },
  {
    name: "In Process",
    status: "processing",
  },
  {
    name: "Shipped",
    status: "shipped",
  },
  {
    name: "Delivered",
    status: "delivered",
  },
];

const MyPurchase = () => {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const { control } = useForm({
    defaultValues: {
      date: [startDate, endDate],
    },
  });
  const onChange = (dates: any) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <Flex w={"full"} flexDir={"column"} gap={4}>
      <Flex flexWrap={"wrap"} justify={"space-between"} align={"center"}>
        <Text fontSize={"xl"}>My Orders</Text>
        <>
          <ReactDatePicker
            width={"fit-content"}
            handleChange={onChange}
            startDate={startDate}
            endDate={endDate}
            ranged
            name="date"
            placeholder="Select Date Range ..."
            isClearable={startDate !== "" || endDate !== ""}
            onClear={() => {
              setStartDate("");
              setEndDate("");
            }}
            control={control}
          />
        </>
      </Flex>
      <Tabs isLazy colorScheme="primary" variant={"unstyled"}>
        <TabList whiteSpace={"nowrap"} overflowX={"auto"} overflowY={"hidden"}>
          {TabItems.map((tab, index) => (
            <Tab
              key={index}
              _selected={{
                borderBottomColor: "primary.500",
              }}
              borderBottom={"5px solid"}
              borderBottomColor={"primary.50"}
              fontSize={{ base: "sm", md: "md", xl: "lg" }}
              whiteSpace={"nowrap"}
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>
        {/* <TabIndicator height="4px" bg={"primary.500"} borderRadius="1px" /> */}
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
