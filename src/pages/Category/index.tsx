import { useFetchProductsByCategory } from "@/api/functions/Category";
import SelectInput from "@/components/Form/SelectInput";
import ItemDisplay from "@/components/ItemDisplay";
import PaginationButton from "@/components/PaginationButton";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useLocation, useParams } from "react-router-dom";
import { sortOptions } from "./data/data";

type OptionType = {
  label: string;
  value: string;
};

function Category() {
  const { category_slug, slug } = useParams<{
    category_slug: string;
    slug: string;
  }>();
  const [isLessThan540] = useMediaQuery("(max-width: 540px)");

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const pageFromUrl = Number(urlParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(1);
  // Ensure slug is not undefined
  if (!slug) {
    throw new Error("Slug is required");
  }
  const param = category_slug ? { category_slug, slug } : slug!;

  const { data, isPending } = useFetchProductsByCategory(pageFromUrl, param);

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  const handleSelectChange = (selectedOption: OptionType) => {
    console.log(selectedOption.value);
  };

  return (
    <Container
      as={"section"}
      id="collection"
      maxW={{ base: "98vw", md: "95vw", lg: "80vw" }}
      py={10}
    >
      {isPending ? (
        <LoadingSpinner />
      ) : (
        <>
          <Flex
            gap={4}
            flexDir={isLessThan540 ? "column" : "row"}
            justify={isLessThan540 ? "center" : "space-between"}
            align={isLessThan540 ? "center" : "space-between"}
          >
            <Stack gap={2}>
              <Heading textAlign={"center"}>
                {data?.breadcrumbs?.category.name}
              </Heading>
              <Breadcrumb
                spacing="8px"
                separator={<ChevronRightIcon color="gray.700" />}
              >
                <BreadcrumbItem>
                  <BreadcrumbLink href={"/"}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbItem>
                  <BreadcrumbLink href={`${data?.breadcrumbs?.category.slug}`}>
                    {data?.breadcrumbs?.category.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Breadcrumb>
            </Stack>
            <SelectInput
              isControlled={false}
              placeholder="Sort by"
              name={"sort"}
              handleChange={handleSelectChange}
              options={sortOptions}
            />
          </Flex>
          <Flex flexDir={"column"} gap={4}>
            <Flex gap={4} mt={12}>
              <Flex flexDir={"column"} w={{ base: "full" }}>
                {data ? (
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 600: 2, 1200: 3 }}
                  >
                    <Masonry gutter="30px">
                      {data.data.map((item: any) => (
                        <ItemDisplay key={item.id} data={item} />
                      ))}
                    </Masonry>
                  </ResponsiveMasonry>
                ) : (
                  <Text>No data</Text>
                )}
              </Flex>
            </Flex>
            <PaginationButton
              currentPage={data?.pagination?.current_page ?? currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={data?.pagination?.total_pages ?? 10}
            />
          </Flex>
        </>
      )}
    </Container>
  );
}

export default Category;
