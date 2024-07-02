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
};

function RadioBox({ name, control, options, bg }: RadioBoxProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <RadioGroup overflow={"hidden"} value={value} onChange={onChange}>
          <HStack gap={1}>
            {options.map((option: any, index: number) => (
              <FormControl key={index}>
                <FormLabel
                  cursor={"pointer"}
                  bg={option.value === value ? "primary.500" : "#DFDFDF"}
                  border={"1px solid transparent"}
                  _hover={{
                    border: "1px solid ",
                    borderColor: "primary.500",
                  }}
                  borderRadius={"9999px"}
                  textColor={option.value === value ? "white" : "black"}
                  px={4}
                  py={2}
                  htmlFor={option.value}
                  fontSize={"sm"}
                  onClick={() => {
                    console.log("option", value);
                  }}
                >
                  {option.label}
                </FormLabel>
                <Radio
                  display={"none"}
                  id={option.value}
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
