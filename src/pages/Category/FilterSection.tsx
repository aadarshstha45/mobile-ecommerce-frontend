import { CheckboxGroup, Stack, Text } from "@chakra-ui/react";

type FilterProps = {
  onFilterChange: (values: string[]) => void;
  children?: React.ReactNode;
};

function FilterSection({ onFilterChange, children }: FilterProps) {
  return (
    <>
      <Text fontWeight={700} fontSize={"20px"}>
        Filter By:
      </Text>

      <Stack w={"fit-content"}>
        <CheckboxGroup onChange={onFilterChange} colorScheme="primary">
          {children}
        </CheckboxGroup>
      </Stack>
    </>
  );
}

export default FilterSection;
