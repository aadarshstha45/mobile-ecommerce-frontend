import { useFetchOrders } from "@/api/functions/Order";
import { PageSizeSelect } from "@/components/Pagination";
import { perPage } from "@/utils/pagination";
import { Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import OrderDisplay from "./OrderDisplay";

const InProcess = () => {
  const [pageSize, setPageSize] = useState<any>(10);
  const { data, isPending } = useFetchOrders();

  return (
    <Flex flexDir={"column"} gap={4}>
      <Flex align={"center"} gap={2}>
        <Text fontSize={{ base: "md", md: "lg" }}>Show : </Text>
        <PageSizeSelect
          options={perPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
        />
      </Flex>
      <OrderDisplay data={data} isPending={isPending} />
    </Flex>
  );
};

export default InProcess;
