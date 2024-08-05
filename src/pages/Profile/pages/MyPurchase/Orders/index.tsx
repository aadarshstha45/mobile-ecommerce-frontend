import { useFetchOrders } from "@/api/functions/Order";
import { PaginationButton } from "@/components/Pagination";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { Flex, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OrderDisplay from "./OrderDisplay";

interface OrderProps {
  fromDate: string | null;
  toDate: string | null;
  status: string;
}

const Orders = ({ fromDate, toDate, status }: OrderProps) => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const pageFromUrl = Number(urlParams.get("page")) || 1;

  const [currentPage, setCurrentPage] = useState(1);

  const { data, isPending, isFetching } = useFetchOrders(
    currentPage,
    status,
    fromDate!,
    toDate!
  );

  console.log(data);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  return (
    <Flex flexDir={"column"} gap={4}>
      <Stack gap={4}></Stack>
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <OrderDisplay
          data={data ?? { data: [], message: "" }}
          isPending={isPending}
        />
      )}
      {data?.pagination && data.pagination.total_pages > 1 && (
        <PaginationButton
          currentPage={data?.pagination?.current_page ?? currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={data?.pagination?.total_pages ?? 10}
        />
      )}
    </Flex>
  );
};

export default Orders;
