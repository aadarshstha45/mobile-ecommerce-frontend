import { useChangePassword } from "@/api/auth";
import { TextInput } from "@/components/Form";
import { ChangePasswordSchema } from "@/utils/validation/auth";
import { Button, Divider, Flex, Text } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

const AccountSettings = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      current_password: "",
      new_password: "",
      c_new_password: "",
    },
    resolver: zodResolver(ChangePasswordSchema),
  });

  const { mutateAsync: changePassword, isPending, error } = useChangePassword();

  const errorMessage = (error?.response?.data as any)?.errors;

  const onSubmit = async (data: any) => {
    await changePassword(data);
    reset();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Flex w={"fit-content"} flexDir={"column"} gap={4}>
      <Text fontSize={"xl"}>Account Settings</Text>
      <Text fontSize={"xl"} fontWeight={500}>
        Change Password
      </Text>
      <Text>Fill the below form to update your password.</Text>
      <Divider my={2} />
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextInput
          name={"current_password"}
          label={"Old Password"}
          type={"password"}
          isRequired
          errors={errors}
          backErrors={errorMessage}
          control={control}
        />
        <TextInput
          name={"new_password"}
          label={"New Password"}
          type={"password"}
          backErrors={errorMessage}
          errors={errors}
          isRequired
          control={control}
        />
        <TextInput
          name={"c_new_password"}
          label={"Confirm Password"}
          type={"password"}
          backErrors={errorMessage}
          errors={errors}
          isRequired
          control={control}
        />
        <Button
          isLoading={isPending}
          size={"sm"}
          type="submit"
          colorScheme="primary"
          borderRadius={3}
          mt={4}
        >
          Change Password
        </Button>
      </form>
    </Flex>
  );
};

export default AccountSettings;
