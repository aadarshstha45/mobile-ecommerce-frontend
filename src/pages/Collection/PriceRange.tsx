import {
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";

type PriceRangeProps = {
  priceRange: number;
  onChangeEnd: (val: number) => void;
};

function PriceRange({ priceRange, onChangeEnd }: PriceRangeProps) {
  return (
    <Stack>
      <Text fontWeight={700}>Price Range</Text>
      <Slider
        aria-label="slider-ex-5"
        colorScheme="primary"
        onChangeEnd={onChangeEnd}
        min={1000} // Minimum value of the slider
        max={10000} // Maximum value of the slider
        step={1} // Optional step size
        defaultValue={500} // Default value of the slider
        w={"70%"}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Text textColor={"gray.500"}>{priceRange}</Text>
    </Stack>
  );
}

export default PriceRange;
