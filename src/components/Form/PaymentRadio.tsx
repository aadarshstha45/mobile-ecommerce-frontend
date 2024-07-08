import {
  Flex,
  FormControl,
  FormLabel,
  Radio,
  RadioGroup,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Control, Controller } from "react-hook-form";
type RadioBoxProps = {
  name: string;
  control?: Control<any>;
  options: any;
  bg?: string;
};

const PaymentRadio = ({ name, control, options }: RadioBoxProps) => {
  return (
    <FormControl>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup value={value} onChange={onChange}>
            {options.map((option: any, index: number) => (
              <React.Fragment key={index}>
                <Flex
                  as={FormLabel}
                  p={2}
                  w={"200px"}
                  border={"1px solid"}
                  borderColor={
                    option.value === value ? "primary.500" : "gray.200"
                  }
                  borderRadius={5}
                  justify={"space-between"}
                  align={"center"}
                  htmlFor={option.value}
                >
                  <Text fontWeight={400}>{option.label}</Text>
                  {option.icon && option.icon}
                </Flex>
                <Radio
                  hidden
                  id={option.value}
                  name={option.value}
                  value={option.value}
                ></Radio>
              </React.Fragment>
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default PaymentRadio;
