import { useFetchCategories } from "@/api/functions/Category";

import {
  Button,
  Link as ChakraLink,
  HStack,
  Icon,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverTrigger,
  Spinner,
  Stack,
} from "@chakra-ui/react";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const CategoryFilter = () => {
  const [perPage, setPerPage] = useState(10);

  const { data: categories, isFetching } = useFetchCategories(perPage);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    categories?.data.length > 0 && (
      <Filter defaultExpanded title="Categories">
        {categories.data.map((category: any) => (
          <Popover
            key={category.id}
            defaultIsOpen={true}
            isLazy
            trigger="hover"
            placement="right"
          >
            <PopoverTrigger>
              <HStack
                justify={"space-between"}
                onMouseEnter={() => {
                  setHoveredCategory(category.id);
                }}
                _hover={{
                  bg: "gray.100",
                }}
                p={2}
                cursor={"pointer"}
              >
                <ChakraLink
                  fontSize={{ base: "14px", md: "16px" }}
                  as={Link}
                  to={`/${category.slug}`}
                >
                  {category.name}
                </ChakraLink>
                {hoveredCategory === category.id &&
                  category.subcategories &&
                  category.subcategories.length > 0 && (
                    <Icon as={ChevronRight} boxSize={6} />
                  )}
              </HStack>
            </PopoverTrigger>
            {hoveredCategory === category.id &&
              category.subcategories &&
              category.subcategories.length > 0 && (
                <PopoverContent
                  display={{ base: "none", md: "flex" }}
                  onMouseLeave={() => {
                    setHoveredCategory(null);
                  }}
                  zIndex={10}
                  border={"1px solid"}
                  px={0}
                  w={"fit-content"}
                  flexDir={"column"}
                  gap={2}
                >
                  <PopoverArrow shadow={"none"} />
                  {category.subcategories.map((sub: any) => {
                    return (
                      <Stack key={sub.id} gap={2}>
                        <ChakraLink
                          key={sub.id}
                          fontSize={{ base: "14px", md: "16px" }}
                          as={Link}
                          _hover={{
                            bg: "gray.100",
                          }}
                          p={2}
                          to={`/${category.slug}/${sub.slug}`}
                        >
                          {sub.name}
                        </ChakraLink>
                      </Stack>
                    );
                  })}
                </PopoverContent>
              )}
          </Popover>
        ))}

        {categories?.pagination?.total_pages > 1 &&
          (isFetching ? (
            <Spinner size={"xs"} color="primary.500" />
          ) : (
            <Button
              w={"fit-content"}
              size={"xs"}
              variant={"unstyled"}
              onClick={() => setPerPage(perPage + 5)}
              _hover={{
                textDecoration: "underline",
              }}
              textColor={"primary.500"}
            >
              View More
            </Button>
          ))}
      </Filter>
    )
  );
};

export default CategoryFilter;
