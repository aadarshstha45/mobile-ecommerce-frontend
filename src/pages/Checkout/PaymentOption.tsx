import { Esewa } from "@/assets/icons/PaymentIcons/Esewa";
import Jean from "@/assets/images/NewArrivals/jean1.png";
import TShirt from "@/assets/images/SalesImage/shirt 1.png";
import PaymentRadio from "@/components/Form/PaymentRadio";
import { IStepProps } from "@/utils/IStepProps";
import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
const data = [
  {
    id: 1,
    name: "Jean ",
    price: 100,
    size: "M",
    color: "Blue",
    image: Jean,
    quantity: 1,
  },
  {
    id: 2,
    name: "T-Shirt",
    price: 50,
    size: "M",
    color: "Black",
    image: TShirt,
    quantity: 2,
  },
];

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
  const { control } = useForm({
    defaultValues: {
      payment: "",
    },
  });
  return (
    <form>
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
            width={{ base: "full", sm: "200px" }}
            mb={4}
          ></FormControl>
          {data?.map((item) => (
            <HStack key={item.id} justify={"space-between"} py={2}>
              <Heading fontSize={"lg"}>{item.name}</Heading>
              <Heading textColor={"primary.500"} fontSize={"lg"}>
                Rs. {item.price}
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
          type={"submit"}
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
