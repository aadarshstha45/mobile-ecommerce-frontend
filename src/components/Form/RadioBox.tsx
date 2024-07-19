/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormLabel,
  HStack,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";

type RadioBoxProps = {
  name: string;
  control?: Control<any>;
  options: any;
  handleChange?: any;
};

function RadioBox({ name, control, options, handleChange }: RadioBoxProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <RadioGroup
          overflow={"hidden"}
          value={value}
          onChange={(value) => {
            onChange(value);
            handleChange && handleChange(value);
          }}
        >
          <HStack gap={0}>
            {options.map((option: any, index: number) => (
              <FormControl w={"fit-content"} key={index}>
                <FormLabel
                  w={"fit-content"}
                  cursor={"pointer"}
                  bg={
                    option.value === parseInt(value) ? "primary.500" : "#DFDFDF"
                  }
                  border={"1px solid"}
                  borderColor={
                    option.value === parseInt(value) ? "primary.500" : "#DFDFDF"
                  }
                  _hover={{
                    border: "1px solid ",
                    borderColor: "primary.500",
                  }}
                  borderRadius={2}
                  textColor={
                    option.value === parseInt(value) ? "white" : "black"
                  }
                  p={1}
                  htmlFor={`${name}_${option.value}`}
                  fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                >
                  {option.label}
                </FormLabel>
                <Radio
                  defaultValue={index === 0 ? option.value : undefined}
                  display={"none"}
                  id={`${name}_${option.value}`}
                  value={option.value}
                />
              </FormControl>
            ))}
          </HStack>
        </RadioGroup>
      )}
    />
  );
}

export default RadioBox;
