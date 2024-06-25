import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { SendHorizontalIcon } from "lucide-react";
import { useState } from "react";

const Queries = () => {
  const [query, setQuery] = useState<string>("");
  const handleQueryChange = (e: any) => {
    setQuery(e.target.value);
  };

  const handleSend = () => {
    console.log("Query:", query);
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
            <Textarea
              border={"1px solid #001D83"}
              _hover={{ border: "1px solid #001D83" }}
              focusBorderColor="#001D83"
              bg={"#F6F9FF"}
              value={query}
              onChange={handleQueryChange}
              placeholder="Type your query here"
            />
            <Button
              rightIcon={<SendHorizontalIcon size={20} />}
              borderRadius={2}
              colorScheme="primary"
              onClick={handleSend}
            >
              Submit
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Queries;
