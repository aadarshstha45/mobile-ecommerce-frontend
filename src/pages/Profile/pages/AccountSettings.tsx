import { TextInput } from "@/components/Form";
import { Button, Card, CardBody, Divider, Flex, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

const AccountSettings = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Flex flexDir={"column"} gap={4}>
      <Text fontSize={"xl"}>Account Settings</Text>
      <Card border={"none"} shadow={"none"} h={"fit-content"} w={"fit-content"}>
        <CardBody>
          <Text fontSize={"xl"} fontWeight={"semibold"}>
            Change Password
          </Text>
          <Text>Fill the below form to update your password.</Text>
          <Divider my={2} />
          <form>
            <TextInput
              name={"current_password"}
              label={"Old Password"}
              type={"password"}
              isRequired
              control={control}
            />
            <TextInput
              name={"new_password"}
              label={"New Password"}
              type={"password"}
              isRequired
              control={control}
            />
            <TextInput
              name={"c_new_password"}
              label={"Confirm Password"}
              type={"password"}
              isRequired
              control={control}
            />
            <Button
              // isLoading={isLoading}
              size={"sm"}
              type="submit"
              colorScheme="primary"
              borderRadius={3}
              mt={4}
            >
              Change Password
            </Button>
          </form>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default AccountSettings;
