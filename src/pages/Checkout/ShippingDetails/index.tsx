import { useFetchAddresses } from "@/api/auth";
import { IStepProps } from "@/utils/IStepProps";
import { useOrderStore } from "@/utils/store";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CheckIcon, CirclePlus, MapPinIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import AddressForm from "./AddressForm";

const ShippingDetails = ({ stepProps }: IStepProps) => {
  const { data, isRefetching } = useFetchAddresses();
  const { stepData, setStepData } = useOrderStore();
  const {
    isOpen: isFormOpen,
    onOpen: onFormOpen,
    onClose: onFormClose,
  } = useDisclosure();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      delivery_address_id: "",
    },
  });

  const submit = (data: any) => {
    if (!data.delivery_address_id) {
      toast.error("Please select a delivery address");
      return;
    }
    setStepData({ ...stepData, delivery_address_id: data.delivery_address_id });
    stepProps.nextStep();
  };

  const handlePrevPage = () => {
    stepProps.prevStep();
  };

  return (
    <Flex flexDir="column" gap={4}>
      <form id="shipping-details-form" onSubmit={handleSubmit(submit)}>
        <Controller
          name="delivery_address_id"
          control={control}
          render={({ field: { value, onChange } }) => (
            <RadioGroup value={value} onChange={onChange}>
              <Flex w={"full"} flexDir={"column"} gap={4}>
                <Text fontSize={"xl"}>Select Delivery Address</Text>
                {isRefetching ? (
                  <div className="loader"></div>
                ) : data && data.length > 0 ? (
                  data.map((address: any, index: number) => (
                    <FormControl key={index}>
                      <FormLabel
                        bg={parseInt(value) === address.id ? "#f5f5f5" : ""}
                        w={{ base: "full", lg: "60%" }}
                        border={
                          parseInt(value) === address.id
                            ? "2px solid"
                            : "1px solid"
                        }
                        borderRadius={2}
                        p={4}
                        pos={"relative"}
                        borderColor={
                          parseInt(value) === address.id ? "green" : "#000"
                        }
                        htmlFor={address.id}
                      >
                        <Box
                          bg={"green"}
                          w={4}
                          h={4}
                          pos={"absolute"}
                          top={2}
                          right={2}
                          display={
                            parseInt(value) === address.id ? "block" : "none"
                          }
                          overflow={"hidden"}
                        >
                          <Icon as={CheckIcon} color={"white"} boxSize={4} />
                        </Box>
                        <HStack spacing={4} align={"start"}>
                          <Icon
                            as={MapPinIcon}
                            color="primary.500"
                            boxSize={8}
                          />
                          <Stack spacing={2}>
                            <HStack spacing={4}>
                              <Text
                                fontSize={{
                                  base: "14px",
                                  md: "18px",
                                }}
                              >
                                {address.address && address.address + ","}{" "}
                                {address?.street && address?.street + ","}{" "}
                                {address?.city},{address?.country}
                              </Text>
                            </HStack>
                            <Text
                              fontSize={{
                                base: "14px",
                                md: "18px",
                              }}
                            >
                              {address?.landmark}
                            </Text>
                          </Stack>
                        </HStack>
                      </FormLabel>
                      <Radio
                        isChecked={value === address.id}
                        key={index}
                        id={address.id}
                        value={address.id}
                        display={"none"}
                      />
                    </FormControl>
                  ))
                ) : (
                  <Text pb={4} fontSize={{ base: "14px", md: "18px" }}>
                    No address saved yet
                  </Text>
                )}
              </Flex>
            </RadioGroup>
          )}
        />
        <HStack
          onClick={onFormOpen}
          cursor={"pointer"}
          color={"primary.500"}
          w={"fit-content"}
        >
          <Icon as={CirclePlus} boxSize={6} />
          <Text fontSize={{ base: "14px", md: "18px" }}>Add New Address</Text>
        </HStack>

        <HStack mt={6} justify={"space-between"}>
          <Button
            colorScheme={"primary"}
            w={"fit-content"}
            onClick={handlePrevPage}
            size={"sm"}
          >
            Previous
          </Button>
          <Button
            colorScheme={"primary"}
            w={"fit-content"}
            size={"sm"}
            type="submit"
            form="shipping-details-form"
          >
            Next
          </Button>
        </HStack>
      </form>
      <AddressForm isOpen={isFormOpen} onClose={onFormClose} />
    </Flex>
  );
};

export default ShippingDetails;
