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
  bg?: string;
  handleChange?: any;
};

function RadioBox({ name, control, options, bg, handleChange }: RadioBoxProps) {
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
          <HStack gap={1}>
            {options.map((option: any, index: number) => (
              <FormControl key={index}>
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
                  borderRadius={"9999px"}
                  textColor={
                    option.value === parseInt(value) ? "white" : "black"
                  }
                  px={4}
                  py={2}
                  htmlFor={`${name}_${option.value}`}
                  fontSize={"sm"}
                >
                  {option.label}
                </FormLabel>
                <Radio
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
