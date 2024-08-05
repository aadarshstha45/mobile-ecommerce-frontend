/* eslint-disable @typescript-eslint/no-explicit-any */
// CountrySelect.js
import {
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
} from "@chakra-ui/react";
import { ChakraStylesConfig, Select } from "chakra-react-select";
import ReactCountryFlag from "react-country-flag";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { CountryCodes } from "../data";

type SelectProps = {
  defaultValue?: any;
  placeholder?: string;
  handleChange?: any;
  label?: string;
  name: string;
  control?: Control<any>;
  isRequired?: boolean;
  isReadOnly?: boolean;
  errors: FieldErrors;
};

const options = CountryCodes.map((country) => ({
  value: country.dial_code,
  name: country.name,
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
      {country.dial_code}
    </div>
  ),
}));
const PhoneInput = ({
  label,
  handleChange,
  name,
  control,
  isRequired,
  isReadOnly,
  defaultValue,
  errors,
}: SelectProps) => {
  const chakraStyles: ChakraStylesConfig = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused
        ? "#4A57B3"
        : isReadOnly
        ? "gray.300"
        : "gray.300",
      "&:hover": {
        borderColor: isReadOnly ? "gray.300" : "gray.400",
      },
      py: "10px",
      width: { base: "full", sm: "120px" },
      boxShadow: state.isFocused ? `0 0 0 1px #4A57B3` : "none",
      paddingTop: "1px",
      paddingBottom: "1px",
    }),
    option: (provided) => ({
      ...provided,
      fontSize: "14px",
      overflow: "auto",
    }),
    menu: (provided) => ({
      ...provided,
      padding: "2px",
      fontSize: "14px",
      overflow: "auto",
      zIndex: 9999,
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "2px",
      fontSize: "14px",
    }),
  };
  return (
    <FormControl isReadOnly={isReadOnly} mb={4} isRequired={isRequired}>
      <FormLabel fontSize={{ sm: "14px", md: "16px" }} fontWeight={450}>
        {label}
      </FormLabel>

      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <HStack flexWrap={{ base: "wrap", sm: "nowrap" }} gap={1}>
            <Select
              defaultValue={options.find((option) => option.value === "+977")}
              options={options}
              value={
                defaultValue
                  ? options.find((option) => option.value === defaultValue)
                  : options.find((option) => option.value === value)
              }
              errorBorderColor="red.500"
              onChange={handleChange}
              focusBorderColor={isReadOnly ? "gray.300" : "primary.500"}
              chakraStyles={chakraStyles}
              menuPlacement={"top"}
              selectedOptionColorScheme="primary"
              useBasicStyles
            />
            <Input
              type="number"
              w={"full"}
              focusBorderColor={isReadOnly ? "gray.300" : "primary.500"}
              _hover={{ borderColor: isReadOnly ? "gray.300" : "gray.400" }}
              errorBorderColor="red.500"
              border={"1px solid"}
              borderColor={
                isReadOnly ? "gray.300" : errors[name] ? "red.500" : "gray.300"
              }
              value={value}
              onChange={onChange}
            />
          </HStack>
        )}
      />
      {errors && errors[name] && (
        <FormHelperText
          color="red.400"
          fontSize={{ base: "14px", md: "16px" }}
          fontStyle={"italic"}
          fontWeight={400}
        >
          {(errors[name] as any).message}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default PhoneInput;
