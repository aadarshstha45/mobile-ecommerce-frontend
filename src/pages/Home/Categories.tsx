import { useFetchCategories } from "@/api/functions/Category";
import LazyLoadImage from "@/components/Image";
import { HomeCategoryProps } from "@/services/service-types";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  HStack,
  Image,
  Spinner,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { NavLink } from "react-router-dom";
const Categories = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  //   const isVisible = useIsVisible(targetRef);
  const [perPage, setPerPage] = useState(8);
  const { data: categories, isFetching } = useFetchCategories(perPage);

  return (
    <Container
      as={"section"}
      id="customer"
      maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
      ref={targetRef}
    >
      {categories && categories.data && categories.data.length > 0 && (
        <Flex flexDir={"column"} gap={4}>
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
              Categories
            </Text>
          </HStack>

          <ResponsiveMasonry
            columnsCountBreakPoints={{
              0: 1,
              300: 2,
              550: 4,
              950: 6,
              1350: 8,
            }}
          >
            <Masonry gutter="10px">
              {categories.data.map((category: HomeCategoryProps) => (
                <Card
                  as={NavLink}
                  to={category.slug}
                  overflow={"hidden"}
                  borderRadius={20}
                  key={category.id}
                  pos={"relative"}
                  role="group"
                >
                  <CardHeader p={0}>
                    {category.image ? (
                      <Box>
                        <LazyLoadImage
                          id={category.id}
                          src={category.image}
                          alt={category.name}
                          w={"full"}
                          _groupHover={{ transform: "scale(1.1)" }}
                        />
                      </Box>
                    ) : (
                      <Image
                        loading="lazy"
                        w={"full"}
                        _groupHover={{ transform: "scale(1.1)" }}
                        src="https://via.placeholder.com/150"
                        alt={category.name}
                      />
                    )}
                  </CardHeader>
                  <CardBody
                    bg={"white"}
                    bottom={0}
                    left={0}
                    w={"full"}
                    transition={"all 0.3s"}
                    _groupHover={{ transform: "translateY(0px)" }}
                    pos={"absolute"}
                    borderTopRadius={20}
                    p={2}
                  >
                    <Text
                      noOfLines={1}
                      textAlign={"center"}
                      fontSize={{ base: "14px", sm: "16px", lg: "18px" }}
                      color={"gray.500"}
                      _groupHover={{
                        fontWeight: 500,
                      }}
                    >
                      {category.name}
                    </Text>
                  </CardBody>
                </Card>
              ))}
            </Masonry>
          </ResponsiveMasonry>

          {categories?.pagination?.total_pages > 1 && (
            <Stack align={"center"} mr={10} justify={"center"}>
              {isFetching ? (
                <Spinner thickness="4px" color="primary.500" />
              ) : (
                <Button
                  w={"fit-content"}
                  size={"xs"}
                  variant={"unstyled"}
                  onClick={() => setPerPage(perPage + 8)}
                  _hover={{
                    textDecoration: "underline",
                  }}
                  textColor={"primary.500"}
                >
                  View More
                </Button>
              )}
            </Stack>
          )}
        </Flex>
      )}
    </Container>
  );
};

export default Categories;
