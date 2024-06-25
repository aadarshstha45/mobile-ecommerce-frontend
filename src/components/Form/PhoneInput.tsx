/* eslint-disable @typescript-eslint/no-explicit-any */
// CountrySelect.js
import { FormControl, FormLabel, HStack, Input } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import ReactCountryFlag from "react-country-flag";
import { Control, Controller } from "react-hook-form";
import { CountryCodes } from "../data";

type SelectProps = {
  placeholder?: string;
  handleChange?: any;
  label?: string;
  name: string;
  control?: Control<any>;
  isRequired?: boolean;
  isReadOnly?: boolean;
};

const options = CountryCodes.map((country) => ({
  value: country.dial_code,
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
}: SelectProps) => {
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
              value={options.find((option) => option.value === value)}
              onChange={handleChange}
              focusBorderColor="primary.500"
              chakraStyles={{
                control: (provided, state) => ({
                  ...provided,
                  border: "1px solid",
                  borderRadius: "2px",
                  borderColor: state.isFocused ? "#4A57B3" : "#000",
                  "&:hover": {
                    borderColor: "#000",
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
              }}
              menuPlacement={"top"}
              selectedOptionColorScheme="primary"
              useBasicStyles
            />
            <Input
              w={"full"}
              focusBorderColor="primary.500"
              _hover={{ borderColor: "#000" }}
              borderRadius={"2px"}
              errorBorderColor="red.500"
              border={"1px solid #000"}
              value={value}
              onChange={onChange}
            />
          </HStack>
        )}
      />
    </FormControl>
  );
};

export default PhoneInput;
