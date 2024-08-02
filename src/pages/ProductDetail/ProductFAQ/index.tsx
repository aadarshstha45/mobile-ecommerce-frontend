import { useFecthProductFaqs } from "@/api/functions/Product";
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

interface ProductFAQProps {
  productId: string | null;
}

const ProductFAQ = ({ productId }: ProductFAQProps) => {
  if (!productId) return null;

  const { data: FAQData, isPending } = useFecthProductFaqs(productId);
  return (
    FAQData.length > 0 && (
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
                Our Team will try to address your query regarding this
                particular product as soon as you enquire about product
              </Text>
            </Stack>
            <Accordion w={{ base: "100%", md: "60%" }} allowToggle>
              {FAQData.map((faq: any) => (
                <AccordionItem border={"none"} key={faq.id}>
                  <AccordionButton
                    py={{ base: "20px", md: "15px" }}
                    textAlign={"center"}
                    borderBottom={"1px solid #D9D9D9"}
                  >
                    <Flex w={"full"} justify={"space-between"}>
                      <Text fontSize={"20px"}>{faq.question}</Text>
                      <AccordionIcon
                        w={{ base: 6, md: 8 }}
                        h={{ base: 6, md: 8 }}
                      />
                    </Flex>
                  </AccordionButton>

                  <AccordionPanel>{faq.answer}</AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Flex>
        </Container>
      </Flex>
    )
  );
};

export default ProductFAQ;
