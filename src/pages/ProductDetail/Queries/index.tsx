import { useSendProductQuery } from "@/api/functions/Query";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { SendHorizontalIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import QueryReply from "./QueryReply";

const Queries = () => {
  const { id } = useParams<{ id: string }>();
  const isAuthenticated = sessionStorage.getItem("access_token") ? true : false;
  const sendQuery = useSendProductQuery(id!, 3);
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
      <Box bg={"#CAD6FF"}>
        <Container
          maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
          id="product-detail"
          py={10}
        >
          <Flex justify={"center"} align={"center"} flexDir={"column"} gap={4}>
            <Stack textAlign={"center"} gap={6} w={{ base: "100%", md: "60%" }}>
              <Heading color={"primary.500"} size={"lg"}>
                Have any queries?
              </Heading>
              <Text size={"md"}>
                Our Team will try to address your query regarding this
                particular product as soon as you enquire about product
              </Text>
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
            </Stack>
            <QueryReply />
          </Flex>
        </Container>
      </Box>
    </Stack>
  );
};

export default Queries;
