import { useSendProductQuery } from "@/api/functions/Query";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { SendHorizontalIcon } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const Queries = () => {
  const { id } = useParams<{ id: string }>();
  const isAuthenticated = sessionStorage.getItem("access_token") ? true : false;
  const sendQuery = useSendProductQuery();
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
              Our Team will try to address your query regarding this particular
              product as soon as you enquire about product
            </Text>
            <form onSubmit={handleSubmit(handleSend)}>
              <FormControl>
                <Controller
                  name="question"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <InputGroup alignItems={"end"}>
                      <Textarea
                        border={"1px solid #001D83"}
                        _hover={{ border: "1px solid #001D83" }}
                        focusBorderColor="#001D83"
                        bg={"#F6F9FF"}
                        value={value}
                        onChange={onChange}
                        placeholder="Type your query here"
                      />
                      <InputRightElement w={"fit-content"} mt={10}>
                        <Button
                          type="submit"
                          w={"fit-content"}
                          rightIcon={<SendHorizontalIcon size={20} />}
                          borderRadius={2}
                          colorScheme="primary"
                        >
                          Submit
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  )}
                />
              </FormControl>
            </form>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Queries;
