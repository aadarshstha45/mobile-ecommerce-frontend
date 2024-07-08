/* eslint-disable @typescript-eslint/no-explicit-any */
import { useLogin } from "@/api/auth";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import GoogleIcon from "@/assets/icons/GoogleIcon";
import LoginBanner from "@/assets/images/Auth/LoginImage.png";
import { TextInput } from "@/components/Form";
import { LoginSchema } from "@/utils/validation";
import { AtSignIcon, LockIcon } from "@chakra-ui/icons";
import {
  AbsoluteCenter,
  Box,
  Button,
  Card,
  Link as ChakraLink,
  Checkbox,
  Container,
  Divider,
  Flex,
  GridItem,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const { mutateAsync, isPending } = useLogin();
  const [isLessThan340] = useMediaQuery("(max-width: 340px)");
  const navigate = useNavigate();
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit = async (data: any) => {
    await mutateAsync(data);
    navigate("/");
    window.location.reload();
  };

  return (
    <Flex
      bg={{ base: "#f2f2f2", md: "" }}
      minH={{ base: window.innerHeight, sm: "100vh" }}
      maxW={"100vw"}
      align={"center"}
      justify={"center"}
      overflow={"hidden"}
    >
      <Container maxW={{ base: "98vw", lg: "90vw", xl: "85vw" }}>
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
                src={LoginBanner}
                alt={"Login Banner"}
                fallback={<Box bg={"gray.100"} w={"100%"} h={"100%"} />}
              />
            </GridItem>
            <GridItem
              w={{ base: "95%", sm: "80%", md: "90%", xl: "70%" }}
              justifySelf={"center"}
              alignSelf={"center"}
              colSpan={1}
            >
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Flex
                  p={{ base: 4, sm: "40px 10px" }}
                  flexDir={"column"}
                  justify={"center"}
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
                    Already have an account? Login
                  </Heading>
                  <TextInput
                    errors={errors}
                    label="Email"
                    name={"email"}
                    control={control}
                    leftIcon={<AtSignIcon />}
                    isRequired
                  />
                  <TextInput
                    errors={errors}
                    label="Password"
                    name={"password"}
                    type="password"
                    control={control}
                    leftIcon={<LockIcon />}
                    isRequired
                  />

                  <HStack
                    justifyContent={"space-between"}
                    mt={4}
                    flexWrap={"wrap"}
                  >
                    <Checkbox
                      colorScheme={"primary"}
                      size={{ base: "sm", md: "md" }}
                    >
                      <Text fontSize={{ base: "14px", sm: "16px" }}>
                        Remember me
                      </Text>
                    </Checkbox>
                    <ChakraLink
                      as={Link}
                      size={"lg"}
                      to="/reset-password"
                      color={"primary.500"}
                      mt={2}
                      fontSize={{ base: "14px", sm: "16px" }}
                    >
                      Forgot Password?
                    </ChakraLink>
                  </HStack>
                  <Button
                    type="submit"
                    colorScheme="primary"
                    w={"100%"}
                    mt={8}
                    size={{ base: "sm", md: "md" }}
                    borderRadius={0}
                    isLoading={isPending}
                  >
                    Log In
                  </Button>
                  <ChakraLink
                    as={Link}
                    to="/register"
                    color={"primary.500"}
                    mt={4}
                    fontSize={{ base: "14px", sm: "16px" }}
                    textAlign={"center"}
                  >
                    Don't have an account? Register
                  </ChakraLink>
                  <Box pos={"relative"} w={"100%"} my={10}>
                    <Divider borderColor={"black"} opacity={1} w={"full"} />
                    <AbsoluteCenter fontSize={"12px"} px={4} bg={"white"}>
                      OR continue with
                    </AbsoluteCenter>
                  </Box>
                  <HStack
                    align={"center"}
                    justify={"center"}
                    flexWrap={"wrap"}
                    spacing={4}
                  >
                    <Button
                      colorScheme="primary"
                      variant={"outline"}
                      w={isLessThan340 ? "100%" : ""}
                      size={{ base: "sm", md: "md" }}
                      leftIcon={<GoogleIcon boxSize={6} />}
                    >
                      Google
                    </Button>
                    <Button
                      w={isLessThan340 ? "100%" : ""}
                      colorScheme="facebook"
                      variant={"outline"}
                      size={{ base: "sm", md: "md" }}
                      leftIcon={<FacebookIcon boxSize={6} />}
                    >
                      Facebook
                    </Button>
                  </HStack>
                </Flex>
              </form>
            </GridItem>
          </SimpleGrid>
        </Card>
      </Container>
    </Flex>
  );
}

export default LoginPage;
