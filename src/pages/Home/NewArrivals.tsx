import { useFetchHomeNewArrivals } from "@/api/functions/Category";
import ItemDisplay, { columnBreakpoints } from "@/components/ItemDisplay";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { Box, Container, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

function NewArrivals() {
  const targetRef = useRef<HTMLDivElement>(null);
  // const isVisible = useIsVisible(targetRef);
  const { data: newArrivalsData, isPending } = useFetchHomeNewArrivals();
  console.log(newArrivalsData);
  return (
    <Container
      as={"section"}
      id="new_arrivals"
      maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
      ref={targetRef}
    >
      {isPending ? (
        <Flex justify={"center"} align={"center"} w={"full"} h={"full"}>
          <LoadingSpinner height={"full"} />
        </Flex>
      ) : (
        newArrivalsData &&
        newArrivalsData.length > 0 && (
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
                  New Arrivals
                </Text>
              </HStack>
              <Link to={"/new-arrivals"}>
                <HStack align={"center"} gap={1}>
                  <Text
                    fontWeight={600}
                    textColor={"primary.500"}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    See More
                  </Text>
                  <Icon color={"primary.500"} as={ArrowRight} w={6} h={6} />
                </HStack>
              </Link>
            </Flex>
            <ResponsiveMasonry columnsCountBreakPoints={columnBreakpoints}>
              <Masonry gutter="30px">
                {newArrivalsData?.map((data: any) => (
                  <ItemDisplay key={data.id} data={data} />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </Flex>
        )
      )}
    </Container>
  );
}

export default NewArrivals;
