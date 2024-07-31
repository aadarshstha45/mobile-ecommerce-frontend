import { useFetchHomeNewArrivals } from "@/api/functions/Category";
import ItemDisplay, { columnBreakpoints } from "@/components/ItemDisplay";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Spinner,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { ArrowRight, CirclePlusIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Link } from "react-router-dom";

function NewArrivals() {
  const targetRef = useRef<HTMLDivElement>(null);

  // const isVisible = useIsVisible(targetRef);

  const [perPage, setPerPage] = useState(8);
  const [isLessThan768] = useMediaQuery("(max-width: 768px)");

  const {
    data: newArrivalsData,
    isPending,
    isFetching,
  } = useFetchHomeNewArrivals(perPage);

  useEffect(() => {
    if (isLessThan768) {
      setPerPage(4);
    } else {
      setPerPage(8);
    }
  }, [isLessThan768]);
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
        newArrivalsData.data &&
        newArrivalsData.data.length > 0 && (
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
                {newArrivalsData.data.map((data: any) => (
                  <ItemDisplay
                    key={data.id}
                    data={data}
                    discountPercent={data?.discount}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
            {newArrivalsData?.pagination?.per_page < 8 && (
              <Stack align={"center"} mr={10} justify={"center"}>
                {isFetching ? (
                  <Spinner thickness="4px" color="primary.500" />
                ) : (
                  <Button
                    variant={"unstyled"}
                    w={"fit-content"}
                    colorScheme="primary"
                    onClick={() => setPerPage(perPage + 4)}
                  >
                    <Icon
                      _hover={{ color: "primary.600" }}
                      color={"primary.500"}
                      as={CirclePlusIcon}
                      boxSize={6}
                    />
                  </Button>
                )}
              </Stack>
            )}
          </Flex>
        )
      )}
    </Container>
  );
}

export default NewArrivals;
