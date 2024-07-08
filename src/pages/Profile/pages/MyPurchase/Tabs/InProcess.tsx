import { useFetchOrders } from "@/api/functions/Order";
import OrderDisplay from "./OrderDisplay";

const InProcess = () => {
  const { data, isPending } = useFetchOrders();

  console.log(data);
  return <OrderDisplay data={data} isPending={isPending} />;
};

export default InProcess;
