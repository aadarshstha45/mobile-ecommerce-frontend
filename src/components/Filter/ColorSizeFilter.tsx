import { useFetchColors, useFetchSizes } from "@/api/functions/Category";

import { Checkbox, Stack } from "@chakra-ui/react";
import Filter from "./Filter";

interface ColorSizeFilterProps {
  handleSizeSelect: (
    e: React.ChangeEvent<HTMLInputElement>,
    sizeId: string
  ) => void;
  handleColorSelect: (
    e: React.ChangeEvent<HTMLInputElement>,
    colorId: string
  ) => void;
}

const ColorSizeFilter = ({
  handleSizeSelect,
  handleColorSelect,
}: ColorSizeFilterProps) => {
  const { data: sizes } = useFetchSizes();
  const { data: colors } = useFetchColors();

  return (
    <Stack gap={4}>
      {colors && colors.length > 0 && (
        <Filter title={"Colors"}>
          {colors.map((color: any) => (
            <Checkbox
              colorScheme="primary"
              onChange={(e) => handleColorSelect(e, color.id)}
              key={color.id}
              value={color.id}
            >
              {color.name}
            </Checkbox>
          ))}
        </Filter>
      )}
      {sizes && sizes.length > 0 && (
        <Filter title={"Sizes"}>
          {sizes.map((size: any) => (
            <Checkbox
              colorScheme="primary"
              onChange={(e) => handleSizeSelect(e, size.id)}
              key={size.id}
              value={size.id}
            >
              {size.name}
            </Checkbox>
          ))}
        </Filter>
      )}
    </Stack>
  );
};

export default ColorSizeFilter;
