import { useFetchNewArrivals } from "@/api/functions/Category";
import BreadCrumbs from "@/components/BreadCrumbs";
import { CategoryFilter, ColorSizeFilter } from "@/components/Filter";
import FilterDrawer from "@/components/Filter/FilterDrawer";
import { SelectInput } from "@/components/Form";
import ItemDisplay, { columnBreakpoints } from "@/components/ItemDisplay";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import {
  Container,
  Flex,
  IconButton,
  Stack,
  Text,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { Settings2 } from "lucide-react";
import { ChangeEvent, useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { sortOptions } from "../Category/data/data";

type OptionType = {
  label: string;
  value: string;
};

function NewArrivals() {
  const navigate = useNavigate();
  const [isLessThan540] = useMediaQuery("(max-width: 540px)");
  const location = useLocation();
  const pathname = location.pathname.split("/")[1].replace(/-/g, " ");
  const urlParams = new URLSearchParams(location.search);
  const pageFromUrl = Number(urlParams.get("page")) || 1;
  const sortFromUrl = urlParams.get("sort") || "newest";
  const [_, setCurrentPage] = useState(1);
  const [sort, setSort] = useState("newest");
  // Ensure slug is not undefined

  //   const param = category_slug ? { category_slug, slug } : slug!;

  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const { data, isPending, isFetching } = useFetchNewArrivals(
    pageFromUrl,
    sort,
    JSON.stringify(selectedSizes),
    JSON.stringify(selectedColors)
  );

  useEffect(() => {
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

  const handleSizeSelect = (
    e: ChangeEvent<HTMLInputElement>,
    sizeId: string
  ) => {
    setSelectedSizes(
      e.target.checked
        ? [...selectedSizes, sizeId]
        : selectedSizes.filter((s) => s !== sizeId)
    );
    window.scroll({ top: 0, behavior: "smooth" });
  };
  const handleColorSelect = (
    e: ChangeEvent<HTMLInputElement>,
    colorId: string
  ) => {
    setSelectedColors(
      e.target.checked
        ? [...selectedColors, colorId]
        : selectedColors.filter((id) => id !== colorId)
    );
    window.scroll({ top: 0, behavior: "smooth" });
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container
      as={"section"}
      id="collection"
      maxW={{ base: "98vw", md: "95vw" }}
      py={10}
    >
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
            textTransform={"capitalize"}
          >
            {pathname}
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

      <FilterDrawer isOpen={isOpen} onClose={onClose}>
        <CategoryFilter />
        <ColorSizeFilter
          handleSizeSelect={handleSizeSelect}
          handleColorSelect={handleColorSelect}
        />
      </FilterDrawer>
      <IconButton
        aria-label="Filter"
        as={Settings2}
        cursor={"pointer"}
        size={"xs"}
        p={1}
        colorScheme="gray"
        display={{ base: "block", sm: "none" }}
        onClick={onOpen}
      />

      <Flex py={4} gap={4}>
        <Flex
          w={{ sm: "200px", md: "250px" }}
          display={{ base: "none", sm: "flex" }}
          minH={window.innerHeight}
        >
          <Flex flexDir={"column"} gap={4} w={"full"}>
            <CategoryFilter />
            <ColorSizeFilter
              handleSizeSelect={handleSizeSelect}
              handleColorSelect={handleColorSelect}
            />
          </Flex>
        </Flex>
        <Flex w={"full"} flexDir={"column"} gap={4}>
          {isPending ? (
            <LoadingSpinner height={"500px"} />
          ) : (
            <Flex flexDir={"column"} gap={4}>
              {isFetching ? (
                <LoadingSpinner height={"500px"} />
              ) : data && data.data?.length > 0 ? (
                <ResponsiveMasonry columnsCountBreakPoints={columnBreakpoints}>
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

            //   {data?.pagination.total_items > 12 && (
            //   <PaginationButton
            //     currentPage={data?.pagination?.current_page ?? currentPage}
            //     setCurrentPage={setCurrentPage}
            //     totalPages={data?.pagination?.total_pages ?? 2}
            //     sort={sort}
            //   />
            // )}
          )}
        </Flex>
      </Flex>
    </Container>
  );
}

export default NewArrivals;
