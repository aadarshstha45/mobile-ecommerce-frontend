import { useFetchProductsByCategory } from "@/api/functions/Category";
import SelectInput from "@/components/Form/SelectInput";
import ItemDisplay from "@/components/ItemDisplay";
import { CloseIcon } from "@chakra-ui/icons";
import {
  Checkbox,
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useLocation, useParams } from "react-router-dom";
import ColorSize from "./ColorSize";
import FilterSection from "./FilterSection";
import PriceRange from "./PriceRange";
import {
  colorOptions,
  filterOptions,
  sizeOptions,
  sortOptions,
} from "./data/data";

type OptionType = {
  label: string;
  value: string;
};

function Category() {
  const { id } = useParams<{ id: string }>();
  const [isLessThan540] = useMediaQuery("(max-width: 540px)");
  const [priceRange, setPriceRange] = useState<number | null>(null);
  const [size, setSize] = useState<string[]>([]);
  const [color, setColor] = useState<string[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const pageFromUrl = Number(urlParams.get("page")) || 1;
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const { data } = useFetchProductsByCategory(
    pageFromUrl,
    pageSize,
    Number(id)
  );

  useEffect(() => {
    setCurrentPage(pageFromUrl);
  }, [pageFromUrl]);

  const handleSelectChange = (selectedOption: OptionType) => {
    console.log(selectedOption.value);
  };

  const handleRemove = (item: string) => {
    if (size.includes(item)) {
      const newSize = size.filter((size) => size !== item);
      console.log(newSize);
      setSize(newSize);
    } else if (color.includes(item)) {
      const newColor = color.filter((color) => color !== item);
      console.log(newColor);
      setColor(newColor);
    } else if (category.includes(item)) {
      const newCategory = category.filter((category) => category !== item);
      console.log(newCategory);
      setCategory(newCategory);
    }
  };

  return (
    <Container
      as={"section"}
      id="collection"
      maxW={{ base: "98vw", md: "95vw", lg: "80vw" }}
      py={10}
    >
      <Flex
        gap={4}
        flexDir={isLessThan540 ? "column" : "row"}
        justify={isLessThan540 ? "center" : "space-between"}
        align={isLessThan540 ? "center" : "space-between"}
      >
        <Heading textAlign={"center"}>{id}</Heading>
        <SelectInput
          isControlled={false}
          placeholder="Sort by"
          name={"sort"}
          handleChange={handleSelectChange}
          options={sortOptions}
        />
      </Flex>
      <Flex gap={4} mt={12}>
        <Flex
          display={{ base: "none", md: "flex" }}
          borderRadius={8}
          border={"1px solid #d9d9d9"}
          py={4}
          px={8}
          shadow={"sm"}
          flexDir={"column"}
          gap={4}
          h={"fit-content"}
          w={"20%"}
        >
          <FilterSection
            onFilterChange={(value) => {
              console.log(value);
            }}
          >
            {filterOptions.map((item, index) => (
              <Checkbox
                isChecked={category.includes(item.label)}
                onChange={(e) => {
                  if (e.target.checked) setCategory([...category, item.label]);
                  else
                    setCategory((prevCategory) =>
                      prevCategory.filter((category) => category !== item.label)
                    );
                }}
                key={index}
              >
                {item.label}
              </Checkbox>
            ))}
          </FilterSection>

          <PriceRange
            priceRange={priceRange || 0}
            onChangeEnd={setPriceRange}
          />

          <ColorSize title="Color">
            {colorOptions.map((item, index) => (
              <Checkbox
                isChecked={color.includes(item.label)}
                onChange={(e) => {
                  if (e.target.checked) setColor([...color, item.label]);
                  else
                    setColor((prevColor) =>
                      prevColor.filter((color) => color !== item.label)
                    );
                }}
                key={index}
              >
                {item.label}
              </Checkbox>
            ))}
          </ColorSize>
          <ColorSize title="Size">
            {sizeOptions.map((item, index) => (
              <Checkbox
                isChecked={size.includes(item.label)}
                onChange={(e) => {
                  if (e.target.checked) setSize([...size, item.label]);
                  else
                    setSize((prevSize) =>
                      prevSize.filter((size) => size !== item.label)
                    );
                }}
                key={index}
              >
                {item.label}
              </Checkbox>
            ))}
          </ColorSize>
        </Flex>
        <Flex flexDir={"column"} w={{ base: "full", md: "80%" }}>
          {size.length ||
            color.length ||
            (category.length > 0 && (
              <Stack gap={2} mb={4}>
                {size.length > 0 && (
                  <HStack gap={2}>
                    <Text textColor={"gray.500"}>Size:</Text>
                    {size.map((item, index) => (
                      <Flex
                        borderRadius={4}
                        key={index}
                        bg={"rgba(74, 87, 179, 0.2)"}
                        align={"center"}
                        gap={2}
                        px={2}
                      >
                        <Text textColor={"primary.800"} key={index}>
                          {item}
                        </Text>
                        <CloseIcon
                          cursor={"pointer"}
                          boxSize={2}
                          onClick={() => {
                            handleRemove(item);
                          }}
                        />
                      </Flex>
                    ))}
                  </HStack>
                )}
                {color.length > 0 && (
                  <HStack gap={2}>
                    <Text textColor={"gray.500"}>Color:</Text>
                    {color.map((item, index) => (
                      <Flex
                        borderRadius={4}
                        key={index}
                        bg={"rgba(74, 87, 179, 0.2)"}
                        align={"center"}
                        gap={2}
                        px={2}
                      >
                        <Text textColor={"primary.800"} key={index}>
                          {item}
                        </Text>
                        <CloseIcon
                          cursor={"pointer"}
                          boxSize={2}
                          onClick={() => {
                            handleRemove(item);
                          }}
                        />
                      </Flex>
                    ))}
                  </HStack>
                )}
                {category.length > 0 && (
                  <HStack gap={2}>
                    <Text textColor={"gray.500"}>Category:</Text>
                    {category.map((item, index) => (
                      <Flex
                        borderRadius={4}
                        key={index}
                        bg={"rgba(74, 87, 179, 0.2)"}
                        align={"center"}
                        gap={2}
                        px={2}
                      >
                        <Text textColor={"primary.800"} key={index}>
                          {item}
                        </Text>
                        <CloseIcon
                          cursor={"pointer"}
                          boxSize={2}
                          onClick={() => {
                            handleRemove(item);
                          }}
                        />
                      </Flex>
                    ))}
                  </HStack>
                )}
              </Stack>
            ))}

          {data ? (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3 }}
            >
              <Masonry gutter="30px">
                {data.map((item: any) => (
                  <ItemDisplay
                    key={item.id}
                    data={item}
                    hoveredId={hoveredId}
                    setHoveredId={setHoveredId}
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          ) : (
            <Text>No data</Text>
          )}
        </Flex>
      </Flex>
    </Container>
  );
}

export default Category;
