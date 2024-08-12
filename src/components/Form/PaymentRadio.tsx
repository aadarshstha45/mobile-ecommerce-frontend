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
    <FormControl w={{ lg: "400px" }}>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            value={value}
            onChange={(value) => {
              console.log("RadioGroup onChange:", value);
              onChange(value);
            }}
          >
            {options.map((option: any, index: number) => (
              <React.Fragment key={index}>
                <Flex
                  as={FormLabel}
                  p={2}
                  w={"full"}
                  border={option.value === value ? "2px solid" : "1px solid"}
                  borderColor={
                    option.value === value ? "primary.500" : "gray.200"
                  }
                  justify={"space-between"}
                  borderRadius={5}
                  align={"center"}
                  htmlFor={option.value}
                >
                  <Text fontWeight={400}>{option.label}</Text>
                  {option.icon && option.icon}
                </Flex>
                <Radio
                  pos={"absolute"}
                  hidden
                  id={option.value}
                  name={name}
                  value={option.value}
                />
              </React.Fragment>
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default PaymentRadio;
