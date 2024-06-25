import { useUpdateUser } from "@/api/auth";
import { TextInput } from "@/components/Form";
import PhoneInput from "@/components/Form/PhoneInput";
import {
  Button,
  Flex,
  GridItem,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useOutletContext } from "react-router-dom";

const ProfileDetails = () => {
  const data: any = useOutletContext();
  const [readOnly, setReadOnly] = useState(true);
  const { mutateAsync, isPending } = useUpdateUser();
  const { control, reset, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone_number: "",
      birthday: "",
      country: "",
      city: "",
      street: "",
      landmark: "",
    },
  });

  useEffect(() => {
    if (data) {
      reset({
        name: data.name ?? "",
        email: data.email ?? "",
        phone_number: data.phone_number ?? "",
        birthday: data.birthday ?? "",
        country: data.shipping_details?.[0]?.country ?? "",
        city: data.shipping_details?.[0]?.city ?? "",
        street: data.shipping_details?.[0]?.street ?? "",
        landmark: data.shipping_details?.[0]?.landmark ?? "",
      });
    }
  }, [data, reset]);

  const onSubmit = async (data: any) => {
    await mutateAsync(data);
    setReadOnly(true);
  };

  return (
    <Flex
      as={"form"}
      onSubmit={handleSubmit(onSubmit)}
      w={"full"}
      flexDir={"column"}
      gap={8}
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
            />
          </GridItem>
          <GridItem colSpan={1}>
            <TextInput
              isReadOnly
              name={"email"}
              label={"Email"}
              message=" * Email cannot be changed."
              control={control}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <PhoneInput
              isReadOnly={readOnly}
              isRequired={!readOnly}
              name={"phone_number"}
              label={"Phone"}
              control={control}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <TextInput
              isReadOnly={readOnly}
              name={"birthday"}
              label={"Birthday (Optional)"}
              control={control}
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
            <TextInput
              isReadOnly={readOnly}
              isRequired={!readOnly}
              name={"country"}
              label={"Country"}
              control={control}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <TextInput
              isReadOnly={readOnly}
              isRequired={!readOnly}
              name={"city"}
              label={"City"}
              control={control}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <TextInput
              isReadOnly={readOnly}
              name={"street"}
              label={"Street"}
              control={control}
            />
          </GridItem>
          <GridItem colSpan={1}>
            <TextInput
              isReadOnly={readOnly}
              name={"landmark"}
              label={"Nearest Landmark"}
              control={control}
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
