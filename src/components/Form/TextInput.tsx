/* eslint-disable @typescript-eslint/no-explicit-any */
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightElement,
  ResponsiveValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import IconButton from "./IconButton";

import { Property } from "csstype";

type InputProps = {
  label: string;
  control: Control<any>;
  name: string;
  type?: string;
  isRequired?: boolean;
  errors?: FieldErrors;
  leftIcon?: any;
  leftAddon?: any;
  rightIcon?: any;
  placeholder?: string;
  pointerEvents?: ResponsiveValue<Property.PointerEvents>;
  [key: string]: any;
};

export const TextInput = ({
  label,
  control,
  name,
  type,
  isRequired,
  errors,
  leftIcon,
  rightIcon,
  placeholder,
  leftAddon,
  pointerEvents,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl mb={4} isRequired={isRequired} {...rest}>
      <FormLabel fontSize={{ sm: "14px", md: "16px" }} fontWeight={450}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) =>
          type === "password" ? (
            <InputGroup>
              {leftIcon && (
                <InputLeftElement pointerEvents={pointerEvents ?? "none"}>
                  {leftIcon}
                </InputLeftElement>
              )}
              {leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
              <Input
                type={showPassword ? "text" : "password"}
                focusBorderColor="primary.500"
                _hover={{ borderColor: "#000" }}
                borderRadius={"2px"}
                errorBorderColor="red.500"
                border={"1px solid #000"}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                autoComplete="off"
                required={isRequired}
              />
              <InputRightElement px={2} bg={"transparent"}>
                <IconButton
                  _hover={{ bg: "transparent" }}
                  bg={"transparent"}
                  onClick={handleShowPassword}
                  aria-label="Show Password"
                  icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                />
              </InputRightElement>
            </InputGroup>
          ) : (
            <InputGroup>
              {leftIcon && (
                <InputLeftElement
                  pointerEvents="none"
                  children={leftIcon}
                  color={"#000"}
                />
              )}
              <Input
                focusBorderColor="primary.500"
                _hover={{ borderColor: "#000" }}
                borderRadius={"2px"}
                errorBorderColor="red.500"
                border={"1px solid #000"}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                type={type}
              />
              {rightIcon && (
                <InputLeftElement
                  pointerEvents="none"
                  children={rightIcon}
                  color={"#000"}
                />
              )}
            </InputGroup>
          )
        }
      />
      {errors && errors[name] && (
        <FormHelperText
          color="red"
          fontSize="14px"
          fontStyle={"italic"}
          fontWeight={450}
        >
          {(errors[name] as any).message}
        </FormHelperText>
      )}
    </FormControl>
  );
};
