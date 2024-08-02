import { useFetchCategories } from "@/api/functions/Category";

import { Button, Link as ChakraLink, Spinner } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const CategoryFilter = () => {
  const [perPage, setPerPage] = useState(10);

  const { data: categories, isFetching } = useFetchCategories(perPage);

  return (
    categories?.data.length > 0 && (
      <Filter defaultExpanded title="Categories">
        {categories.data.map((category: any) => (
          <ChakraLink
            key={category.id}
            fontSize={{ base: "14px", md: "16px" }}
            as={Link}
            to={`/${category.slug}`}
          >
            {category.name}
          </ChakraLink>
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
