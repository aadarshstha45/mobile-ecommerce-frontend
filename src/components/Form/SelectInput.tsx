import { FormControl, FormLabel } from "@chakra-ui/react";
import { ChakraStylesConfig, Select } from "chakra-react-select";
import ReactCountryFlag from "react-country-flag";
import { Control, Controller } from "react-hook-form";
import { CountryCodes } from "../data";

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
  isRequired?: boolean;
  isReadOnly?: boolean;
}

export const countryOptions = CountryCodes.map((country) => ({
  value: country.name,
  label: (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ReactCountryFlag
        countryCode={country.code}
        svg
        style={{
          width: "1.5em",
          height: "1.5em",
          marginRight: "0.5em",
        }}
      />
      {country.name}
    </div>
  ),
}));

const SelectInput = ({
  options,
  placeholder,
  name,
  control,
  handleChange,
  isControlled,
  label,
  width,
  isReadOnly,
  isRequired,
}: SelectProps) => {
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
      borderColor: isReadOnly ? "gray.300" : "#000",
      "&:hover": {
        borderColor: isReadOnly ? "gray.300" : "#000",
      },
      borderRadius: "2px",
    }),

    menu: (styles: any) => ({
      ...styles,
      zIndex: 9999,
    }),
  };
  return (
    <FormControl
      isRequired={isRequired}
      width={{ base: "full", sm: width ?? "200px" }}
      mb={4}
      isReadOnly={isReadOnly}
    >
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
              focusBorderColor={isReadOnly ? "gray.300" : "#000"}
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
