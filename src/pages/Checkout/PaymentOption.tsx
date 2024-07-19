import { usePostOrder } from "@/api/functions/Order";
import { Esewa } from "@/assets/icons/PaymentIcons/Esewa";
import PaymentRadio from "@/components/Form/PaymentRadio";
import { IStepProps } from "@/utils/IStepProps";
import { useOrderStore } from "@/utils/store";
import { Button, Flex, HStack, Heading, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    await addOrder.mutateAsync({
      ...stepData,
      payment: data.payment,
    });
    setStepData({});
    sessionStorage.removeItem("cartItems");
    navigate("/");
    setTimeout(() => window.location.reload(), 1000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justify={"space-between"} py={2}>
        <Flex flexDir={"column"} gap={4}>
          <Heading fontSize={"lg"} textColor="primary.500">
            Payment Option
          </Heading>
          <PaymentRadio
            control={control}
            name={"payment"}
            options={paymentOptions}
          />
        </Flex>

        <Flex
          width={{ base: "full", sm: "300px", md: "400px" }}
          flexDir={"column"}
        >
          <Heading
            fontSize={"lg"}
            textColor="primary.500"
            pb={4}
            borderBottom={"1px solid #D9D9D9"}
          >
            Purchase Summary
          </Heading>
          <Stack gap={1} py={2}>
            {data?.map((item: any) => (
              <HStack key={item.id} justify={"space-between"}>
                <Heading fontWeight={500} w={"70%"} fontSize={"lg"}>
                  {item.product?.name}
                </Heading>
                <Heading
                  fontWeight={500}
                  textColor={"primary.500"}
                  fontSize={"lg"}
                >
                  Rs.
                  {item.size && item.size.price
                    ? item.size.price * item.quantity
                    : item.product?.price * item.quantity}
                </Heading>
              </HStack>
            ))}
            <HStack justify={"space-between"}>
              <Heading fontWeight={500} fontSize={"lg"}>
                Discount
              </Heading>
              <Heading
                fontWeight={500}
                textColor={"primary.500"}
                fontSize={"lg"}
              >
                - Rs. {stepData?.discount_amount || 0}
              </Heading>
            </HStack>
          </Stack>

          <HStack
            borderTop={"1px solid #D9D9D9"}
            justify={"space-between"}
            py={2}
          >
            <Heading fontWeight={500} fontSize={"lg"}>
              Subtotal
            </Heading>
            <Heading fontWeight={500} textColor={"primary.500"} fontSize={"lg"}>
              Rs. {stepData?.total_amount || 0}
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
          isLoading={addOrder.isPending}
        >
          Submit
        </Button>
      </HStack>
    </form>
  );
};

export default PaymentOption;
