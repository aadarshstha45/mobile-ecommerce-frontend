import PasswordBanner from "@/assets/images/Auth/PasswordBanner.png";
import { TextInput } from "@/components/Form/TextInput";
import {
  Box,
  Button,
  Card,
  Container,
  Flex,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
function SetPassword() {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });
  return (
    <Flex
      bg={{ base: "#f2f2f2", md: "" }}
      minH={"100vh"}
      maxW={"100vw"}
      align={"center"}
      justify={"center"}
    >
      <Container maxW={{ base: "98vw", lg: "90vw", xl: "85vw" }} py={10}>
        <Card shadow={"none"}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
            <GridItem
              display={{ base: "none", md: "block" }}
              colSpan={1}
              bg={"white"}
              justifySelf={{ md: "start", xl: "center" }}
              alignContent={"center"}
            >
              <Image
                src={PasswordBanner}
                alt={"Login Banner"}
                fallback={<Box bg={"gray.100"} w={"100%"} h={"100%"} />}
              />
            </GridItem>
            <GridItem
              w={{ base: "90%", lg: "80%" }}
              justifySelf={"center"}
              alignSelf={"center"}
              colSpan={1}
            >
              <form
                onSubmit={handleSubmit((data) => console.log(data))}
                noValidate
              >
                <Flex
                  p={{ base: 4, sm: "40px 10px" }}
                  flexDir={"column"}
                  justify={"center"}
                  align={"center"}
                >
                  <Heading
                    fontSize={{
                      base: "16px",
                      sm: "18px",
                      md: "20px",
                      lg: "22px",
                      xl: "24px",
                    }}
                    textAlign={"center"}
                    mb={8}
                  >
                    Reset Password
                  </Heading>

                  <TextInput
                    errors={errors}
                    label="Password"
                    name={"password"}
                    control={control}
                    isRequired
                  />
                  <TextInput
                    errors={errors}
                    label="Confirm Password"
                    name={"confirmPassword"}
                    control={control}
                    isRequired
                  />

                  <Button
                    type="submit"
                    colorScheme="primary"
                    w={"100%"}
                    mt={8}
                    size={{ base: "sm", md: "md" }}
                    borderRadius={0}
                  >
                    Reset Password
                  </Button>
                  <Flex gap={2} mt={6} align={"center"} as={Link} to={"/login"}>
                    <BiArrowBack />
                    Go back
                  </Flex>
                </Flex>
              </form>
            </GridItem>
          </SimpleGrid>
        </Card>
      </Container>
    </Flex>
  );
}

export default SetPassword;
