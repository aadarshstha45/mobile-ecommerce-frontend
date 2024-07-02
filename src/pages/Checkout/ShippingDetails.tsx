import { useAddAddress, useFetchAddresses } from "@/api/auth";
import { PhoneInput, SelectInput, TextInput } from "@/components/Form";
import Checkbox from "@/components/Form/Checkbox";
import { ModalForm } from "@/components/Form/ModalForm";
import { countryOptions } from "@/components/Form/SelectInput";
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
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

const ShippingDetails = ({ stepProps }: IStepProps) => {
  const { data } = useFetchAddresses();
  console.log("data", data);
  const [countryCode, setCountryCode] = useState("+977");
  const [id, setId] = useState<string | null>(null);
  const addAddress = useAddAddress();
  const { stepData, setStepData } = useOrderStore();
  const {
    isOpen: isFormOpen,
    onOpen: onFormOpen,
    onClose: onFormClose,
  } = useDisclosure();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "",
      city: "",
      street: "",
      landmark: "",
      recipient_name: "",
      phone_number: "",
      is_billing_address: false,
      delivery_address: "1",
    },
  });

  const handleAddForm = () => {
    setId(null);
    onFormOpen();
  };

  const handleFormClose = () => {
    setId(null);
    onFormClose();
  };

  const addNewAddress = async (data: any) => {
    await addAddress.mutateAsync({
      ...data,
      country_code: countryCode,
    });
    handleFormClose();
  };

  const onSubmit = async (data: any) => {
    console.log("data", data.delivery_address);
    setStepData({
      ...stepData,
      delivery_address: data.delivery_address,
    });
    handleFormClose();
    stepProps.nextStep();
  };

  const handlePrevPage = () => {
    stepProps.prevStep();
  };

  return (
    <Flex flexDir="column" gap={4}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="delivery_address"
          control={control}
          render={({ field: { value, onChange } }) => (
            <RadioGroup value={value} onChange={onChange}>
              <Flex w={"full"} flexDir={"column"} gap={4}>
                <Text fontSize={"xl"}>Select Delivery Address</Text>
                {data ? (
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
                                {address?.street}, {address?.city},{" "}
                                {address?.country}
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
                  <Text fontSize={{ base: "14px", md: "18px" }}>
                    No address saved yet
                  </Text>
                )}

                <HStack
                  onClick={handleAddForm}
                  cursor={"pointer"}
                  color={"primary.500"}
                  w={"fit-content"}
                >
                  <Icon as={CirclePlus} boxSize={6} />
                  <Text fontSize={{ base: "14px", md: "18px" }}>
                    Add New Address
                  </Text>
                </HStack>
                <ModalForm
                  isOpen={isFormOpen}
                  onClose={handleFormClose}
                  heading={"Add New Address"}
                  buttonText={id ? "Update" : "Add"}
                  onSubmit={handleSubmit(addNewAddress)}
                  isLoading={addAddress.isPending}
                >
                  <SelectInput
                    width="full"
                    label="Country"
                    options={countryOptions}
                    name="country"
                    isControlled
                    isRequired
                    placeholder="Select Country"
                    control={control}
                  />
                  <TextInput
                    label="City"
                    control={control}
                    name="city"
                    isRequired
                  />
                  <TextInput label="Street" control={control} name="street" />
                  <TextInput
                    label="Landmark"
                    control={control}
                    name="landmark"
                  />
                  <TextInput
                    label="Recipient Name"
                    control={control}
                    name="recipient_name"
                    isRequired
                  />
                  <PhoneInput
                    defaultValue={countryCode}
                    handleChange={(selectedOption: any) => {
                      setCountryCode(selectedOption.value);
                    }}
                    name="phone_number"
                    label="Phone Number"
                    control={control}
                    errors={errors}
                    isRequired
                  />
                  <Checkbox
                    control={control}
                    name="is_billing_address"
                    label="Set as default billing address"
                  />
                </ModalForm>
              </Flex>
            </RadioGroup>
          )}
        />
        <HStack mt={6} justify={"space-between"}>
          <Button
            colorScheme={"primary"}
            w={"fit-content"}
            borderRadius={"2px"}
            onClick={handlePrevPage}
            size={"sm"}
          >
            Previous
          </Button>
          <Button
            colorScheme={"primary"}
            type="submit"
            w={"fit-content"}
            borderRadius={"2PX"}
            size={"sm"}
          >
            Next
          </Button>
        </HStack>
      </form>
    </Flex>
  );
};

export default ShippingDetails;
