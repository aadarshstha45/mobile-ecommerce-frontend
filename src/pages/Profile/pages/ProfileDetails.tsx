import { useUpdateUser } from "@/api/auth";
import {
  DatePicker,
  PhoneInput,
  SelectInput,
  TextInput,
} from "@/components/Form";
import { countryOptions } from "@/components/Form/SelectInput";
import { ProfileSchema } from "@/utils/validation/profile";
import {
  Button,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

const ProfileDetails = () => {
  const data: any = useOutletContext();
  const [readOnly, setReadOnly] = useState(true);
  const { mutateAsync, isPending, error, isError } = useUpdateUser();

  const {
    control,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      birthday: "",
      country: "",
      city: "",
      street: "",
      landmark: "",
      country_code: "",
      dob: "",
    },
    resolver: zodResolver(ProfileSchema),
  });
  const [countryCode, setCountryCode] = useState(
    data?.shipping_details?.[0]?.country_code
  );
  useEffect(() => {
    const country_code = data?.shipping_details?.[0]?.country_code;
    if (country_code) {
      setCountryCode(country_code);
    }
  }, [data]);
  if (isError) {
    const errorMessage = (error?.response?.data as any)?.errors;
    console.log(errorMessage);
  }
  useEffect(() => {
    // Update the state for future renders

    if (data) {
      reset({
        name: data.name ?? "",
        email: data.email ?? "",
        phone_number: data.shipping_details?.[0]?.phone_number ?? "",
        dob: data.dob ?? "",
        country: data.shipping_details?.[0]?.country ?? "",
        city: data.shipping_details?.[0]?.city ?? "",
        street: data.shipping_details?.[0]?.street ?? "",
        landmark: data.shipping_details?.[0]?.landmark ?? "",
      });
    }
  }, [data, reset]);

  const onSubmit = async (data: any) => {
    await mutateAsync({ ...data, country_code: countryCode });
    setReadOnly(true);
  };

  return (
    <Flex
      as={"form"}
      onSubmit={handleSubmit(onSubmit)}
      w={"full"}
      flexDir={"column"}
      gap={8}
      noValidate
    >
      <Flex flexDir={"column"} gap={4}>
        <Text fontSize={"xl"}>Profile Details</Text>
        <SimpleGrid
          w={"full"}
          columns={{ base: 1, md: 2 }}
          spacingX={10}
          spacingY={4}
        >
          <GridItem colSpan={1}>
            <TextInput
              isReadOnly={readOnly}
              isRequired={!readOnly}
              name={"name"}
              label={"Full Name"}
              control={control}
              errors={errors}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <TextInput
              isReadOnly
              name={"email"}
              label={"Email"}
              message=" * Email cannot be changed."
              control={control}
              errors={errors}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <PhoneInput
              defaultValue={countryCode}
              handleChange={(selectedOption: any) => {
                setCountryCode(selectedOption.value);
              }}
              name="phone_number"
              label="Phone Number"
              control={control}
              errors={errors}
              isRequired={!readOnly}
              isReadOnly={readOnly}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <DatePicker
              isReadOnly={readOnly}
              isRequired={!readOnly}
              name="dob"
              label="Birthday (Optional)"
              control={control}
              errors={errors}
            />
          </GridItem>
        </SimpleGrid>
      </Flex>
      <Flex w={"full"} flexDir={"column"} gap={4}>
        <Text fontSize={"xl"}>Billing Address</Text>
        <SimpleGrid
          w={"full"}
          columns={{ base: 1, md: 2 }}
          spacingX={10}
          spacingY={4}
        >
          <GridItem colSpan={1}>
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
          </GridItem>
          <GridItem colSpan={1}>
            <TextInput
              isReadOnly={readOnly}
              isRequired={!readOnly}
              name={"city"}
              label={"City"}
              control={control}
              errors={errors}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <TextInput
              isReadOnly={readOnly}
              name={"street"}
              label={"Street"}
              control={control}
              errors={errors}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <TextInput
              isReadOnly={readOnly}
              name={"landmark"}
              label={"Nearest Landmark"}
              control={control}
              errors={errors}
            />
          </GridItem>
        </SimpleGrid>
      </Flex>
      {readOnly ? (
        <Button
          w={"fit-content"}
          borderRadius={3}
          onClick={() => setReadOnly(false)}
          colorScheme="primary"
        >
          Edit
        </Button>
      ) : (
        <HStack w={"full"}>
          <Button
            isLoading={isPending}
            borderRadius={3}
            type="submit"
            colorScheme="primary"
          >
            Update
          </Button>
          <Button
            borderRadius={3}
            variant={"outline"}
            onClick={() => setReadOnly(true)}
            colorScheme="primary"
          >
            Cancel
          </Button>
        </HStack>
      )}
    </Flex>
  );
};

export default ProfileDetails;
