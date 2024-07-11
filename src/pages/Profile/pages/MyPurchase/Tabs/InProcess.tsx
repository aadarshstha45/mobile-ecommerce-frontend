import { useFetchOrders } from "@/api/functions/Order";
import { DatePicker } from "@/components/Form";
import { PaginationButton } from "@/components/Pagination";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { Button, Flex, HStack, Stack } from "@chakra-ui/react";
import { createBrowserHistory } from "history";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import OrderDisplay from "./OrderDisplay";

const InProcess = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const pageFromUrl = Number(urlParams.get("page")) || 1;
  const dateFromUrl = urlParams.get("date_from") || undefined;
  const dateToUrl = urlParams.get("date_to") || undefined;
  const history = createBrowserHistory();
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState<any>();
  const [toDate, setToDate] = useState<any>();

  const { data, isPending, isFetching } = useFetchOrders(
    pageFromUrl,
    fromDate,
    toDate
  );

  const { control, handleSubmit } = useForm({
    defaultValues: {
      date_from: "",
      date_to: "",
    },
  });

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  useEffect(() => {
    setFromDate(dateFromUrl);
  }, [dateFromUrl]);

  useEffect(() => {
    setToDate(dateToUrl);
  }, [dateToUrl]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    console.log(fromDate);
  }, [fromDate]);

  const handleDateFilter = (data: any) => {
    console.log(data);
    const searchParams = new URLSearchParams(location.search);
    if (data.date_from !== "") {
      searchParams.set("date_from", data.date_from);
      setFromDate(data.date_from);
    } else {
      setFromDate(undefined);
      searchParams.delete("date_from");
    }
    if (data.date_to !== "") {
      searchParams.set("date_to", data.date_to);
      setToDate(data.date_to);
    } else {
      setToDate(undefined);
      searchParams.delete("date_to");
    }
    history.push(
      `${location.pathname}?page=${currentPage}&${searchParams.toString()}`
    );
  };

  return (
    <Flex flexDir={"column"} gap={4}>
      <Stack gap={4}>
        <HStack
          as={"form"}
          onSubmit={handleSubmit(handleDateFilter)}
          align={"center"}
          gap={2}
        >
          <DatePicker
            width="fit-content"
            label="From"
            control={control}
            isControlled
            name="date_from"
          />
          <DatePicker
            width="fit-content"
            label="To"
            isControlled
            control={control}
            name="date_to"
          />
          <Button mt={3} borderRadius={2} type="submit" colorScheme="primary">
            Apply
          </Button>
        </HStack>
      </Stack>
      {isFetching ? (
        <LoadingSpinner />
      ) : (
        <OrderDisplay data={data?.data} isPending={isPending} />
      )}
      <PaginationButton
        fromDate={fromDate}
        toDate={toDate}
        currentPage={data?.pagination?.current_page ?? currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={data?.pagination?.total_pages ?? 10}
      />
    </Flex>
  );
};

export default InProcess;
