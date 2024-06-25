/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowForward } from "@/assets/icons/ArrowForward";
import { AddCartIcon, AddWishListIcon } from "@/assets/icons/CartIcon";

import LazyLoadImage from "@/components/Image";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  GridItem,
  HStack,
  IconButton,
  Link,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface DataProps {
  data: any[];
}

function HandPicked({ data }: DataProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  // Set initial state for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Calculate the index of the first and last item on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the items for the current page from filteredData
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Function to handle previous page
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // Function to handle next page
  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 1);
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <IconButton
          key={i}
          borderRadius={"50%"}
          onClick={() => handlePageClick(i)}
          bg={currentPage === i ? "#656565" : "#CBCBCB"}
          _hover={{ bg: "#656565" }}
          textColor={"white"}
          variant={currentPage === i ? "solid" : "outline"}
          aria-label={`Page ${i}`}
          icon={<Text>{i}</Text>}
        />
      );
    }

    return buttons;
  };

  useEffect(() => {
    setFilteredData(data);
  }, []);

  return (
    <Container
      as={"section"}
      id="handpicked"
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
              Handpicked for You
            </Text>
          </HStack>
          <HStack align={"center"} gap={1}>
            <Link
              fontWeight={600}
              textColor={"primary.500"}
              fontSize={{ base: "sm", md: "md" }}
            >
              See More
            </Link>
            <ArrowForward boxSize={{ base: 4, md: 5 }} />
          </HStack>
        </Flex>
        <SimpleGrid columns={{ base: 1, sm: 2, xl: 4 }} gap={10}>
          {currentItems?.map((item, index) => (
            <GridItem colSpan={1} key={index}>
              <Card
                overflow={"hidden"}
                h={"full"}
                shadow={"none"}
                borderRadius={0}
              >
                <CardHeader
                  pos={"relative"}
                  overflow={"hidden"}
                  border={"1px solid #D2CFCF"}
                  p={0}
                >
                  <Stack gap={2} pos={"absolute"} right={4} top={4}>
                    <Box
                      border={"1px solid #D2CFCF"}
                      borderRadius={"50%"}
                      p={1}
                      bg={"#D9D9D9"}
                      _hover={{
                        bg: "#C6C6C6",
                        textColor: "white",
                      }}
                    >
                      <AddCartIcon
                        _hover={{ textColor: "white" }}
                        boxSize={6}
                      />
                    </Box>
                    <Box
                      border={"1px solid #D2CFCF"}
                      borderRadius={"50%"}
                      p={1}
                      bg={"#D9D9D9"}
                      _hover={{
                        bg: "#C6C6C6",
                        textColor: "white",
                      }}
                    >
                      <AddWishListIcon _hover={{ fill: "white" }} boxSize={6} />
                    </Box>
                  </Stack>
                  {item.image ? (
                    <Box>
                      <LazyLoadImage
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        id={item.id}
                        src={
                          hoveredId === item.id
                            ? item.hovered_image
                            : item.image
                        }
                        alt={item.id.toString()}
                        h={"400px"}
                        w={"full"}
                      />
                    </Box>
                  ) : (
                    <Flex
                      justify={"center"}
                      align={"center"}
                      h={"400px"}
                      w={"full"}
                      bgColor={"#D9D9D9"}
                    >
                      No Image
                    </Flex>
                  )}
                  <Box
                    pos={"absolute"}
                    top={3}
                    left={3}
                    px={1}
                    w={"fit-content"}
                    bg={"#D2CFCF"}
                    textColor={"primary.500"}
                    fontSize={"12px"}
                  >
                    New
                  </Box>
                </CardHeader>
                <CardBody px={0}>
                  <Text
                    fontSize={"13px"}
                    fontWeight={600}
                    textColor={"#939292"}
                  >
                    {item.title}
                  </Text>
                  <HStack justify={"space-between"} align={"center"}>
                    <Text fontSize={"16px"} fontWeight={500}>
                      {item.category}
                    </Text>
                    <HStack spacing={"2px"}>
                      {...Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <StarIcon
                            key={index}
                            boxSize={3}
                            color={
                              index < Math.floor(item.averageRating)
                                ? "#FFC700"
                                : ""
                            }
                          />
                        ))}
                    </HStack>
                  </HStack>
                  <HStack justify={"space-between"} align={"center"}>
                    <HStack spacing={"4px"}>
                      {item.colorOptions?.map((color: any, index: number) => (
                        <Box
                          key={index}
                          h={"14px"}
                          w={"14px"}
                          borderRadius={"50%"}
                          bg={color.option}
                        />
                      ))}
                    </HStack>
                    <HStack spacing={"2px"}>
                      <Text
                        fontSize={item.discountedPrice ? "13px" : "16px"}
                        fontWeight={500}
                        textColor={item.discountedPrice ? "#939292" : ""}
                        textDecoration={
                          item.discountedPrice ? "line-through" : "none"
                        }
                      >
                        ${item.originalPrice}
                      </Text>
                      {item.discountedPrice && (
                        <Text fontSize={"16px"} fontWeight={600}>
                          ${item.discountedPrice}
                        </Text>
                      )}
                    </HStack>
                  </HStack>
                </CardBody>
              </Card>
            </GridItem>
          ))}
        </SimpleGrid>
      </Flex>
      <div>
        <HStack gap={4} py={10} align={"center"} justify={"center"}>
          <IconButton
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            variant={"unstyled"}
            aria-label="Previous"
            borderRadius={"50%"}
            icon={<ChevronLeftIcon boxSize={8} />}
          />

          {renderPageButtons()}
          <IconButton
            cursor={"pointer"}
            onClick={handleNextPage}
            variant={"unstyled"}
            borderRadius={"50%"}
            disabled={currentPage === totalPages}
            aria-label="Next"
            icon={<ChevronRightIcon boxSize={8} />}
          />
        </HStack>
      </div>
    </Container>
  );
}

export default HandPicked;
