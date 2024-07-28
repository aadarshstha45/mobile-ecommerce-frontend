import { useFetchOrders } from "@/api/functions/Order";
import { ReactDatePicker } from "@/components/Form";
import { PaginationButton } from "@/components/Pagination";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { Button, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import OrderDisplay from "./OrderDisplay";

const InProcess = () => {
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const pageFromUrl = Number(urlParams.get("page")) || 1;
  const dateFromUrl = urlParams.get("date_from") || undefined;
  const dateToUrl = urlParams.get("date_to") || undefined;
  const [currentPage, setCurrentPage] = useState(1);
  const [fromDate, setFromDate] = useState<any>();
  const [toDate, setToDate] = useState<any>();

  const { data, isPending, isFetching } = useFetchOrders(
    currentPage,
    fromDate,
    toDate
  );

  const navigate = useNavigate();

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

  const handleDateFilter = (data: any) => {
    urlParams.set("page", "1");
    navigate(`${location.pathname}?${urlParams.toString()}`);
    if (data.date_from !== "") {
      urlParams.set("date_from", data.date_from);
      setFromDate(data.date_from);
    } else {
      setFromDate(undefined);
      urlParams.delete("date_from");
    }
    if (data.date_to !== "") {
      urlParams.set("date_to", data.date_to);
      setToDate(data.date_to);
    } else {
      setToDate(undefined);
      urlParams.delete("date_to");
    }
  };

  return (
    <Flex flexDir={"column"} gap={4}>
      <Stack gap={4}>
        <HStack
          as={"form"}
          onSubmit={handleSubmit(handleDateFilter)}
          align={"center"}
          gap={2}
          w={{ base: "100%", sm: "auto" }}
          flexDir={{ base: "column", sm: "row" }}
        >
          <ReactDatePicker control={control} name="date_from" />
          <Text>TO</Text>
          <ReactDatePicker control={control} name="date_to" />
          <Button mt={-2} borderRadius={2} type="submit" colorScheme="primary">
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
