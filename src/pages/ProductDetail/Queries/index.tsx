import { isAuthenticated } from "@/api/axiosSetup";
import { useSendProductQuery } from "@/api/functions/Query";
import Question from "@/assets/images/question.png";
import ModalLogin from "@/pages/Auth/ModalLogin";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Image,
  Stack,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { SendHorizontalIcon } from "lucide-react";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import QueryReply from "./QueryReply";
const Queries = () => {
  const { id } = useParams<{ id: string }>();
  const sendQuery = useSendProductQuery(id!);
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      console.log(hash);
      const targetElement = document.querySelector(hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      question: "",
      product_id: id,
    },
  });

  const handleSend = async (data: any) => {
    if (isAuthenticated) {
      await sendQuery.mutateAsync({
        ...data,
        product_id: id,
      });
      reset();
    } else {
      toast.error("Please login to send query");
    }
  };

  return (
    <Stack gap={6}>
      <ModalLogin isOpen={isOpen} onClose={onClose} />
      <Box bg={"#CAD6FF"}>
        <Container
          maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
          id="product-detail"
          py={10}
        >
          <Flex justify={"center"} align={"center"} flexDir={"column"} gap={4}>
            <Stack
              mb={10}
              textAlign={"center"}
              gap={6}
              w={{ base: "100%", md: "60%" }}
            >
              <Heading color={"primary.500"} size={"lg"}>
                Have any queries?
              </Heading>
              <Text size={"md"}>
                Our Team will try to address your query regarding this
                particular product as soon as you enquire about product
              </Text>
              {isAuthenticated ? (
                <form onSubmit={handleSubmit(handleSend)}>
                  <FormControl mb={4}>
                    <Controller
                      name="question"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Textarea
                          focusBorderColor={"primary.500"}
                          _hover={{
                            borderColor: "#000",
                          }}
                          borderRadius={"2px"}
                          errorBorderColor="red.500"
                          border={"1px solid"}
                          bg={"#F6F9FF"}
                          value={value}
                          onChange={onChange}
                          placeholder="Type your query here..."
                        />
                      )}
                    />
                  </FormControl>
                  <Button
                    isLoading={sendQuery.isPending}
                    isDisabled={sendQuery.isPending}
                    w={"full"}
                    type="submit"
                    rightIcon={<SendHorizontalIcon size={20} />}
                  >
                    Submit
                  </Button>
                </form>
              ) : (
                <Stack justify={"center"} align={"center"}>
                  <Image w={20} src={Question} alt="question" />
                  <Text>
                    You need to{""}
                    <span onClick={onOpen} className="login-user">
                      {" "}
                      login
                    </span>{" "}
                    to send queries
                  </Text>
                </Stack>
              )}
            </Stack>
            <QueryReply />
          </Flex>
        </Container>
      </Box>
    </Stack>
  );
};

export default Queries;
