import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

const FAQData = [
  {
    id: 1,
    heading: "What size should I order if I'm between sizes?",
    content:
      "If you are between sizes, we recommend sizing up for a better fit. You can always get the perfect fit with the help of a tailor.",
  },
  {
    id: 2,
    heading: "Can these jeans be machine washed?",
    content:
      "We recommend washing these jeans in cold water and hanging them to dry to prevent shrinking.",
  },
  {
    id: 3,
    heading: "Are these jeans suitable for all seasons?",
    content:
      "These jeans are made from a lightweight denim that is perfect for year-round wear. They are great for layering in the winter and wearing on their own in the summer.",
  },
  {
    id: 4,
    heading: "What is the return policy for this product?",
    content:
      "We offer a 30-day return policy on all of our products. If you are not satisfied with your purchase, you can return it for a full refund. Please see our return policy for more details.",
  },
  {
    id: 5,
    heading: "Do you offer international shipping?",
    content:
      "Yes, we offer international shipping to most countries. Please see our shipping policy for more details.",
  },
];

const ProductFAQ = () => {
  return (
    <Flex bg={"#EFEFEF"}>
      <Container
        maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
        id="product-detail"
        py={10}
      >
        <Flex
          justify={"center"}
          align={"center"}
          flexDir={"column"}
          w={"full"}
          gap={4}
        >
          <Stack textAlign={"center"}>
            <Heading color={"primary.500"} size={"lg"}>
              Product Related Questions
            </Heading>
            <Text fontSize={"md"}>
              Our Team will try to address your query regarding this particular
              product as soon as you enquire about product
            </Text>
          </Stack>
          <Accordion w={{ base: "100%", md: "60%" }} allowToggle>
            {FAQData.map((faq) => (
              <AccordionItem border={"none"} key={faq.id}>
                <AccordionButton
                  py={{ base: "20px", md: "15px" }}
                  textAlign={"center"}
                  borderBottom={"1px solid #D9D9D9"}
                >
                  <Flex w={"full"} justify={"space-between"}>
                    <Text fontSize={"20px"}>{faq.heading}</Text>
                    <AccordionIcon
                      w={{ base: 6, md: 8 }}
                      h={{ base: 6, md: 8 }}
                    />
                  </Flex>
                </AccordionButton>

                <AccordionPanel>{faq.content}</AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Flex>
      </Container>
    </Flex>
  );
};

export default ProductFAQ;
