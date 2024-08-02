import { useFetchAllProducts } from "@/api/functions/Product";
import { LoadingSvg } from "@/assets/LoadingIcon";
import BreadCrumbs from "@/components/BreadCrumbs";
import { CategoryFilter, ColorSizeFilter } from "@/components/Filter";
import { SelectInput } from "@/components/Form";
import ItemDisplay, { columnBreakpoints } from "@/components/ItemDisplay";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import {
  Box,
  Container,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useLocation, useNavigate } from "react-router-dom";
import { sortOptions } from "../Category/data/data";

type OptionType = {
  label: string;
  value: string;
};

const Shop = () => {
  const { ref, inView } = useInView();

  const [sort, setSort] = useState("");
  const navigate = useNavigate();
  const [isLessThan540] = useMediaQuery("(max-width: 540px)");
  const location = useLocation();
  const pathname = location.pathname.split("/")[1].replace(/-/g, " ");
  const urlParams = new URLSearchParams(location.search);
  const sortFromUrl = urlParams.get("sort") || "";
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const {
    data,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isPending,
    isFetching,
  } = useFetchAllProducts(
    sort,
    JSON.stringify(selectedSizes),
    JSON.stringify(selectedColors)
  );

  useEffect(() => {
    setSort(sortFromUrl);
  }, [sortFromUrl]);

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage]);

  const handleSelectChange = (selectedOption: OptionType) => {
    setSort(selectedOption.value);
    if (selectedOption.value !== "") {
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
      <Flex py={10} gap={4}>
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
        {isPending ? (
          <LoadingSpinner />
        ) : (
          <Flex flexDir={"column"} gap={4} w={"full"}>
            {data?.pages.map((page, index) => (
              <Box key={index}>
                <ResponsiveMasonry columnsCountBreakPoints={columnBreakpoints}>
                  <Masonry gutter={isLessThan540 ? "10px" : "20px"}>
                    {page.data.map((product: any) => (
                      <ItemDisplay
                        key={product.id}
                        data={product}
                        discountPercent={product?.discount}
                        colorOptions={
                          product?.product_properties &&
                          product.product_properties
                        }
                      />
                    ))}
                  </Masonry>
                </ResponsiveMasonry>
                )
              </Box>
            ))}
            <Box ref={ref} h={"1px"} />
            <HStack gap={4} py={10} align={"center"} justify={"center"}>
              {isFetchingNextPage && <Icon as={LoadingSvg} boxSize={20} />}
            </HStack>
          </Flex>
        )}
      </Flex>
    </Container>
  );
};

export default Shop;
