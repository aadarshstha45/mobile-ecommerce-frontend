import { useFetchProductsByCategory } from "@/api/functions/Category";
import BreadCrumbs from "@/components/BreadCrumbs";
import SelectInput from "@/components/Form/SelectInput";
import ItemDisplay, { columnBreakpoints } from "@/components/ItemDisplay";
import { PaginationButton } from "@/components/Pagination";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { Container, Flex, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
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
  const navigate = useNavigate();
  const [isLessThan540] = useMediaQuery("(max-width: 540px)");
  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const pageFromUrl = Number(urlParams.get("page")) || 1;
  const sortFromUrl = urlParams.get("sort") || "newest";
  const [currentPage, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("newest");
  // Ensure slug is not undefined
  if (!slug) {
    throw new Error("Slug is required");
  }
  const param = category_slug ? { category_slug, slug } : slug!;

  const { data, isPending, isFetching } = useFetchProductsByCategory(
    pageFromUrl,
    param,
    sort
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  useEffect(() => {
    setSort(sortFromUrl);
  }, [sortFromUrl]);

  const handleSelectChange = (selectedOption: OptionType) => {
    setSort(selectedOption.value);
    if (selectedOption.value !== "") {
      urlParams.set("page", "1");
      urlParams.set("sort", selectedOption.value);
      navigate(`?${urlParams.toString()}`);
    }
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
            align={isLessThan540 ? "start" : "space-between"}
          >
            <Stack gap={2}>
              <Text
                fontSize={{ base: "18px", sm: "20px", md: "22px", lg: "24px" }}
                fontWeight={500}
              >
                {data?.breadcrumbs?.category.name}
              </Text>
              <BreadCrumbs />
            </Stack>
            <SelectInput
              isControlled={false}
              value={sort}
              placeholder="Sort by"
              name={"sort"}
              handleChange={handleSelectChange}
              options={sortOptions}
            />
          </Flex>
          <Flex mt={-6} flexDir={"column"} gap={4}>
            <Flex gap={4} mt={12}>
              <Flex flexDir={"column"} w={{ base: "full" }}>
                {isFetching ? (
                  <LoadingSpinner />
                ) : data && data.data?.length > 0 ? (
                  <ResponsiveMasonry
                    columnsCountBreakPoints={columnBreakpoints}
                  >
                    <Masonry gutter={isLessThan540 ? "10px" : "20px"}>
                      {data?.data.map((item: any) => (
                        <ItemDisplay
                          key={item.id}
                          data={item}
                          discountPercent={item?.discount}
                        />
                      ))}
                    </Masonry>
                  </ResponsiveMasonry>
                ) : (
                  <Navigate to={"/"} />
                )}
              </Flex>
            </Flex>
            {data?.pagination.total_items > 12 && (
              <PaginationButton
                currentPage={data?.pagination?.current_page ?? currentPage}
                setCurrentPage={setCurrentPage}
                totalPages={data?.pagination?.total_pages ?? 2}
                sort={sort}
              />
            )}
          </Flex>
        </>
      )}
    </Container>
  );
}

export default Category;
