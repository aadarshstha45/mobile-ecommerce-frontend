import {
  useAddAddress,
  useDeleteAddress,
  useEditAddress,
  useFetchAddresses,
} from "@/api/auth";
import ActionMenu from "@/components/ActionMenu";
import { PhoneInput, SelectInput, TextInput } from "@/components/Form";
import Checkbox from "@/components/Form/Checkbox";
import DeleteAlert from "@/components/Form/DeleteAlert";
import { ModalForm } from "@/components/Form/ModalForm";
import { countryOptions } from "@/components/Form/SelectInput";
import {
  Box,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CirclePlus, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

const SavedAddress = () => {
  const user: any = useOutletContext();
  const { data } = useFetchAddresses();
  const [countryCode, setCountryCode] = useState("+977");
  const [id, setId] = useState<string | null>(null);
  const addAddress = useAddAddress();
  const editAddress = useEditAddress(id!);
  const deleteAddress = useDeleteAddress();
  const [prevData, setPrevData] = useState<any>(null);
  const [readOnly, setReadOnly] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      country: "",
      city: "",
      street: "",
      landmark: "",
      recipient_name: "",
      phone_number: "",
      is_billing_address: false,
    },
  });
  useEffect(() => {
    if (id) {
      const foundData = data?.find((address: any) => address.id === id);

      setPrevData(foundData);
      setCountryCode(foundData?.country_code);
      reset({
        country: foundData?.country,
        city: foundData?.city,
        street: foundData?.street,
        landmark: foundData?.landmark,
        recipient_name: user?.shipping_details?.[0]?.is_billing_address
          ? user?.name
          : foundData?.recipient_name ?? "",
        phone_number: foundData?.phone_number,
        is_billing_address: foundData?.is_billing_address,
      });
    }
  }, [id, data, reset, user]);

  const {
    isOpen: isFormOpen,
    onOpen: onFormOpen,
    onClose: onFormClose,
  } = useDisclosure();

  const {
    isOpen: isDeleteOpen,
    onOpen: onDeleteOpen,
    onClose: onDeleteClose,
  } = useDisclosure();

  const onSubmit = async (data: any) => {
    if (prevData) {
      await editAddress.mutateAsync({
        ...data,
        country_code: countryCode,
      });
    } else {
      await addAddress.mutateAsync({
        ...data,
        country_code: countryCode,
      });
    }
    console.log("data", data);
    onFormClose();
    reset();
  };

  const handleViewForm = (addressId: string) => {
    setReadOnly(true);
    if (addressId) {
      setId(addressId);
      onFormOpen();
    }
  };

  const handleEditForm = (addressId: string) => {
    if (addressId) {
      setId(addressId);
      onFormOpen();
    }
  };

  const handleAddForm = () => {
    setId(null);
    setPrevData(null);
    onFormOpen();
  };

  const handleFormClose = () => {
    setId(null);
    setPrevData(null);
    reset({
      country: "",
      city: "",
      street: "",
      landmark: "",
      recipient_name: "",
      phone_number: "",
      is_billing_address: true,
    });
    setReadOnly(false);
    onFormClose();
  };

  const handleDeleteAlert = (addressId: string) => {
    if (addressId) {
      setId(addressId);
      onDeleteOpen();
    }
  };

  const handleDelete = async () => {
    if (id) {
      await deleteAddress.mutateAsync(id);
      onDeleteClose();
    }
  };

  return (
    <Flex w={"full"} flexDir={"column"} gap={4}>
      <Text fontSize={"xl"}>Saved Address</Text>
      {data ? (
        data.map((address: any, index: number) => (
          <Box
            key={address.id}
            bg={index === 0 ? "#f5f5f5" : ""}
            w={{ base: "full", lg: "60%" }}
            border={"1px solid #000"}
            borderRadius={2}
            p={4}
            pos={"relative"}
            mt={4}
          >
            <HStack spacing={4} align={"start"}>
              <Icon as={MapPin} color="primary.500" boxSize={8} />
              <Stack spacing={2}>
                <HStack spacing={4}>
                  <Text
                    fontSize={{
                      base: "14px",
                      md: "18px",
                    }}
                  >
                    {address?.street}, {address?.city}, {address?.country}
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
            <ActionMenu
              onView={() => handleViewForm(address?.id)}
              onDelete={() => handleDeleteAlert(address?.id)}
              onEdit={() => handleEditForm(address?.id)}
            />
          </Box>
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
        mt={4}
        w={"fit-content"}
      >
        <Icon as={CirclePlus} boxSize={6} />
        <Text fontSize={{ base: "14px", md: "18px" }}>Add New Address</Text>
      </HStack>
      <ModalForm
        form="shipping-address-form"
        isOpen={isFormOpen}
        onClose={handleFormClose}
        heading={"Add New Address"}
        buttonText={id ? "Update" : "Add"}
        onSubmit={handleSubmit(onSubmit)}
        isLoading={prevData ? editAddress.isPending : addAddress.isPending}
        isDisabled={readOnly}
      >
        <SelectInput
          width="full"
          label="Country"
          options={countryOptions}
          name="country"
          isControlled
          isRequired={!readOnly}
          placeholder="Select Country"
          control={control}
          isReadOnly={readOnly}
        />
        <TextInput
          label="City"
          control={control}
          isReadOnly={readOnly}
          name="city"
          isRequired={!readOnly}
        />
        <TextInput
          label="Street"
          control={control}
          isReadOnly={readOnly}
          name="street"
        />
        <TextInput
          label="Landmark"
          control={control}
          isReadOnly={readOnly}
          name="landmark"
        />
        <TextInput
          label="Recipient Name"
          control={control}
          isReadOnly={readOnly}
          name="recipient_name"
          isRequired={!readOnly}
        />
        <PhoneInput
          defaultValue={countryCode}
          handleChange={(selectedOption: any) => {
            setCountryCode(selectedOption.value);
          }}
          name="phone_number"
          label="Phone Number"
          control={control}
          isReadOnly={readOnly}
          errors={errors}
          isRequired={!readOnly}
        />
        <Checkbox
          control={control}
          isReadOnly={readOnly}
          name="is_billing_address"
          label="Set as default billing address"
        />
      </ModalForm>
      <DeleteAlert
        heading="Delete Address"
        message="Are you sure you want to delete this address?"
        isOpen={isDeleteOpen}
        isDeleting={deleteAddress.isPending}
        onDelete={handleDelete}
        onClose={() => {
          onDeleteClose();
          setId(null);
        }}
      />
    </Flex>
  );
};

export default SavedAddress;
