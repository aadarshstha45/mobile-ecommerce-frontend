import { useFetchOrders } from "@/api/functions/Order";
import { PageSizeSelect, PaginationButton } from "@/components/Pagination";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { perPage } from "@/utils/pagination";
import { Flex, Text } from "@chakra-ui/react";
import { createBrowserHistory } from "history";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OrderDisplay from "./OrderDisplay";

const InProcess = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const pageFromUrl = Number(urlParams.get("page")) || 1;
  const filterFromUrl = urlParams.get("day_filter") || undefined;
  const history = createBrowserHistory();
  const [dayFilter, setDayFilter] = useState<any>();
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isPending, isFetching } = useFetchOrders(
    currentPage,
    dayFilter
  );

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);
  useEffect(() => {
    setDayFilter(filterFromUrl);
  }, [filterFromUrl]);
  useEffect(() => {
    // Update the URL with the new dayFilter value
    const searchParams = new URLSearchParams(location.search);
    if (dayFilter) {
      searchParams.set("day_filter", dayFilter);
    } else {
      searchParams.delete("day_filter");
    }
    history.push(`${location.pathname}?${searchParams.toString()}`);
  }, [dayFilter, location.search, location.pathname, history]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <Flex flexDir={"column"} gap={4}>
      <Flex align={"center"} gap={2}>
        <Text fontSize={{ base: "md", md: "lg" }}>Show : </Text>
        <PageSizeSelect
          options={perPage}
          pageSize={dayFilter}
          setPageSize={setDayFilter}
        />
      </Flex>
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <OrderDisplay data={data?.data} isPending={isPending} />
      )}
      <PaginationButton
        currentPage={data?.pagination?.current_page ?? currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={data?.pagination?.total_pages ?? 10}
      />
    </Flex>
  );
};

export default InProcess;
