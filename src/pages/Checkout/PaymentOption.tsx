import { usePostOrder } from "@/api/functions/Order";
import { Esewa } from "@/assets/icons/PaymentIcons/Esewa";
import PaymentRadio from "@/components/Form/PaymentRadio";
import { IStepProps } from "@/utils/IStepProps";
import { useOrderStore } from "@/utils/store";
import {
  Button,
  Flex,
  GridItem,
  HStack,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { Coins, CreditCard } from "lucide-react";
import { useForm } from "react-hook-form";
import { BiLogoPaypal } from "react-icons/bi";

const paymentOptions = [
  {
    label: "Cash on Delivery",
    value: "cod",
    icon: <Icon as={Coins} boxSize={6} />,
  },
  {
    label: "Esewa",
    value: "esewa",
    icon: <Esewa w={20} h={8} />,
  },
  {
    label: "Debit Card",
    value: "debit",
    icon: <Icon as={CreditCard} boxSize={6} />,
  },
  {
    label: "Paypal",
    value: "paypal",
    icon: <Icon as={BiLogoPaypal} boxSize={6} />,
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
  // const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    await addOrder.mutateAsync({
      ...stepData,
      payment: data.payment,
    });
    setStepData({});
    sessionStorage.removeItem("cartItems");
    // navigate("/e-sewa");
    setTimeout(() => window.location.reload(), 2000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} w={"full"} py={4} my={2}>
        <GridItem colSpan={1}>
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
        </GridItem>
        <GridItem w={"full"} colSpan={1} justifyContent={{ md: "end" }}>
          <Flex
            width={{ base: "full", sm: "95%", md: "80%" }}
            flexDir={"column"}
            gap={2}
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
                <HStack gap={2} key={item.id} justify={"space-between"}>
                  <Heading
                    textAlign={"start"}
                    noOfLines={2}
                    fontWeight={500}
                    fontSize={{ base: "14px", md: "18px", xl: "20px" }}
                  >
                    {item.product?.name}
                  </Heading>
                  <Heading
                    fontWeight={500}
                    textColor={"primary.500"}
                    fontSize={{ base: "14px", md: "18px", xl: "20px" }}
                  >
                    Rs.
                    {item.discountedPrice > 0
                      ? item.discountedPrice * item.quantity
                      : item.totalPrice * item.quantity}
                  </Heading>
                </HStack>
              ))}
              <HStack justify={"space-between"}>
                <Heading
                  fontWeight={500}
                  fontSize={{ base: "14px", md: "18px", xl: "20px" }}
                >
                  Discount
                </Heading>
                <Heading
                  fontWeight={500}
                  textColor={"primary.500"}
                  fontSize={{ base: "14px", md: "18px", xl: "20px" }}
                >
                  - Rs. {stepData?.promo_discount || 0}
                </Heading>
              </HStack>
            </Stack>

            <HStack
              borderTop={"1px solid #D9D9D9"}
              justify={"space-between"}
              py={2}
            >
              <Heading
                fontWeight={500}
                fontSize={{ base: "14px", md: "18px", xl: "20px" }}
              >
                Subtotal
              </Heading>
              <Heading
                fontWeight={500}
                textColor={"primary.500"}
                fontSize={{ base: "14px", md: "18px", xl: "20px" }}
              >
                Rs. {stepData?.total_amount ?? 0}
              </Heading>
            </HStack>
          </Flex>
        </GridItem>
      </SimpleGrid>

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
          type={"button"}
          onClick={(e) => {
            onSubmit({ payment: "cod" });
            e.preventDefault();
            onSubmit;
          }}
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
