import {
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";

type PriceRangeProps = {
  priceRange: number[];
  onChangeEnd: (val: number[]) => void;
  name: string;
};

function PriceRange({ priceRange, onChangeEnd, name }: PriceRangeProps) {
  return (
    <Stack>
      <Text fontWeight={700}>Price Range</Text>
      <RangeSlider
        name={name}
        aria-label={["min", "max"]}
        colorScheme="primary"
        onChangeEnd={(val) => onChangeEnd(val)}
        min={0} // Minimum value of the slider
        max={10000} // Maximum value of the slider
        step={100} // Optional step size
        defaultValue={[0, 10000]} // Default value of the slider
      >
        <RangeSliderTrack bg={"gray.500"}>
          <RangeSliderFilledTrack bg={"primary.500"} />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <HStack justify="space-between">
        <Text textColor={"gray.500"}>{priceRange[0]}</Text>
        <Text textColor={"gray.500"}>{priceRange[1]}</Text>
      </HStack>
    </Stack>
  );
}

export default PriceRange;
