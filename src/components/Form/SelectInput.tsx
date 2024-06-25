import { FormControl, FormLabel } from "@chakra-ui/react";
import { ChakraStylesConfig, Select } from "chakra-react-select";
import { Control, Controller } from "react-hook-form";

interface SelectProps {
  options: {
    value: string;
    label: any;
  }[];
  placeholder?: string;
  name: string;
  control?: Control<any>;
  handleChange?: any;
  isControlled?: boolean;
  label?: string;
  width?: string;
}

const chakraStyles: ChakraStylesConfig = {
  dropdownIndicator: (prev, { selectProps }) => ({
    ...prev,
    "> svg": {
      transition: "transform 0.3s",
      transform: `rotate(${selectProps.menuIsOpen ? -180 : 0}deg)`,
    },
  }),
  control: (styles: any) => ({
    ...styles,
    borderColor: " #000",
    _hover: {
      borderColor: " #000",
    },
    borderRadius: "2px",
  }),

  menu: (styles: any) => ({
    ...styles,
    zIndex: 9999,
  }),
};

const SelectInput = ({
  options,
  placeholder,
  name,
  control,
  handleChange,
  isControlled,
  label,
  width,
}: SelectProps) => {
  return (
    <FormControl width={{ base: "full", sm: width ?? "200px" }} mb={4}>
      <FormLabel fontSize={{ sm: "14px", md: "16px" }} fontWeight={450}>
        {label}
      </FormLabel>
      {isControlled ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Select
              placeholder={placeholder}
              chakraStyles={chakraStyles}
              options={options}
              focusBorderColor="primary.500"
              value={options.find((option) => option.value === value) || ""}
              onChange={(option) => {
                onChange((option as { value: string })?.value);
              }}
              selectedOptionColorScheme="primary"
              useBasicStyles
            />
          )}
        />
      ) : (
        <Select
          chakraStyles={chakraStyles}
          placeholder={placeholder}
          options={options}
          onChange={handleChange}
          selectedOptionColorScheme="primary"
          colorScheme="primary"
          focusBorderColor="primary.500"
          useBasicStyles
        />
      )}
    </FormControl>
  );
};

export default SelectInput;
