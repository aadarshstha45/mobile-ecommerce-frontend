import { usePostOrder } from "@/api/functions/Order";
import { Esewa } from "@/assets/icons/PaymentIcons/Esewa";
import PaymentRadio from "@/components/Form/PaymentRadio";
import { IStepProps } from "@/utils/IStepProps";
import { useOrderStore } from "@/utils/store";
import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const paymentOptions = [
  {
    label: "Cash on Delivery",
    value: "cod",
  },
  {
    label: "Esewa",
    value: "esewa",
    icon: <Esewa w={20} h={20} />,
  },
  {
    label: "Debit Card",
    value: "debit",
  },
  {
    label: "Paypal",
    value: "paypal",
  },
];

const PaymentOption = ({ stepProps }: IStepProps) => {
  const data = JSON.parse(sessionStorage.getItem("cartItems")!);
  const addOrder = usePostOrder();
  const { stepData, setStepData } = useOrderStore();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      payment: "cod",
    },
  });

  const onSubmit = async (data: any) => {
    console.log(stepData);
    await addOrder.mutateAsync({
      ...stepData,
      payment: data.payment,
    });
    setStepData({});
    sessionStorage.removeItem("cartItems");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justify={"space-between"} py={2}>
        <Flex flexDir={"column"} gap={4}>
          <Heading fontSize={"lg"}>Payment Option</Heading>
          <PaymentRadio
            control={control}
            name={"payment"}
            options={paymentOptions}
          />
        </Flex>
        <Flex flexDir={"column"}>
          <FormControl
            width={{ base: "full", sm: "300px", md: "400px" }}
            mb={4}
          ></FormControl>
          {data?.map((item: any) => (
            <HStack key={item.id} justify={"space-between"} py={2}>
              <Heading w={"70%"} fontSize={"lg"}>
                {item.product?.name}
              </Heading>
              <Heading textColor={"primary.500"} fontSize={"lg"}>
                Rs.
                {item.product?.price * item.quantity}
              </Heading>
            </HStack>
          ))}
          <HStack justify={"space-between"} py={2}>
            <Heading fontSize={"lg"}>Discount</Heading>
            <Heading textColor={"primary.500"} fontSize={"lg"}>
              - Rs. 500
            </Heading>
          </HStack>

          <Box w={"full"} h={"1px"} bg={"#939292"} />
          <HStack justify={"space-between"} py={2}>
            <Heading fontSize={"lg"}>Subtotal</Heading>
            <Heading textColor={"primary.500"} fontSize={"lg"}>
              Rs. 500
            </Heading>
          </HStack>
        </Flex>
      </Flex>

      <HStack justify={"space-between"}>
        <Button
          colorScheme={"primary"}
          w={"fit-content"}
          borderRadius={"2px"}
          onClick={stepProps.prevStep}
          size={"sm"}
        >
          Previous
        </Button>
        <Button
          type={"submit"}
          colorScheme={"primary"}
          w={"fit-content"}
          borderRadius={"2PX"}
          size={"sm"}
        >
          Submit
        </Button>
      </HStack>
    </form>
  );
};

export default PaymentOption;
