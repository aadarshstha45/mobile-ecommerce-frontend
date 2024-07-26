import { useFetchHomeSales } from "@/api/functions/Sales";
import { ArrowForward } from "@/assets/icons/ArrowForward";
import ItemDisplay, { columnBreakpoints } from "@/components/ItemDisplay";
import {
  Box,
  Button,
  Link as ChakraLink,
  Container,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { CirclePlusIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

function Sales() {
  const [itemsToShow, setItemsToShow] = useState(8);
  const scrollPositionRef = useRef(0);

  const handleExpandItems = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Store the current scroll position
    scrollPositionRef.current = window.scrollY;
    setItemsToShow(itemsToShow + 4);
  };
  useEffect(() => {
    // Restore the scroll position after state update
    window.scrollTo(0, scrollPositionRef.current);
  }, [itemsToShow]);
  const [isLessThan768] = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isLessThan768) {
      setItemsToShow(4);
    } else {
      setItemsToShow(8);
    }
  }, [isLessThan768]);

  const { data: salesData } = useFetchHomeSales();
  return (
    salesData && (
      <Container
        as={"section"}
        id="sales"
        maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
      >
        <Flex flexDir={"column"} gap={10}>
          <Flex justify={"space-between"} align={"center"}>
            <HStack align={"center"}>
              <Box
                bg={
                  "linear-gradient(180deg, rgba(156,200,252,1) 25%, rgba(0,62,221,1) 100%);"
                }
                h={"40px"}
                w={1}
              />
              <Text
                fontSize={{ base: "lg", sm: "xl", md: "2xl" }}
                fontWeight={"bold"}
              >
                Sales and Offers
              </Text>
            </HStack>
            <HStack align={"center"} gap={1}>
              <ChakraLink
                as={Link}
                to={"/sales-offer"}
                fontWeight={600}
                textColor={"primary.500"}
                fontSize={{ base: "sm", md: "md" }}
              >
                See More
              </ChakraLink>
              <ArrowForward boxSize={{ base: 4, md: 5 }} />
            </HStack>
          </Flex>

          {salesData.products.length > 0 && (
            <ResponsiveMasonry columnsCountBreakPoints={columnBreakpoints}>
              <Masonry gutter={isLessThan768 ? "10px" : "30px"}>
                {salesData.products.slice(0, itemsToShow).map((item: any) => (
                  <ItemDisplay
                    key={item.id}
                    data={item}
                    discountPercent={salesData?.discount_percentage}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          )}
          {itemsToShow < 8 && (
            <Stack align={"center"} mr={10} justify={"center"}>
              <Button
                colorScheme="primary"
                variant={"unstyled"}
                w={"fit-content"}
                onClick={handleExpandItems}
              >
                <Icon
                  _hover={{ color: "primary.600" }}
                  color={"primary.500"}
                  as={CirclePlusIcon}
                  boxSize={6}
                />
              </Button>
            </Stack>
          )}
        </Flex>
      </Container>
    )
  );
}

export default Sales;
