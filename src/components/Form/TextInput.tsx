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
  Spinner,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import IconButton from "./IconButton";

import { baseURL } from "@/api/axiosSetup";
import axios from "axios";
import { Property } from "csstype";
import { CircleCheckBig, CircleX } from "lucide-react";

type InputProps = {
  label?: string;
  control: Control<any>;
  name: string;
  type?: string;
  isRequired?: boolean;
  errors?: FieldErrors;
  leftIcon?: any;
  leftAddon?: any;
  rightIcon?: any;
  message?: string;
  placeholder?: string;
  isReadOnly?: boolean;
  pointerEvents?: ResponsiveValue<Property.PointerEvents>;
  backErrors?: any;
  errorMessage?: string;
  [key: string]: any;
};

const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
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
  message,
  errorMessage,
  pointerEvents,
  backErrors,
  isReadOnly,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [backError, setBackError] = useState<any>(null);
  useEffect(() => {
    setBackError(backErrors);
  }, [backErrors]);

  const handleInputChange = (value: string) => {
    setBackError(null);
    return value;
  };

  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailExists, setEmailExists] = useState<boolean | null>(null);
  const [isDebouncing, setIsDebouncing] = useState(false);

  const validateEmail = async (email: string) => {
    setIsDebouncing(true);
    try {
      const response = await axios.get(
        `${baseURL}/check-unique-email?email=${email}`
      );
      if (response?.data === true) {
        setEmailExists(true);
        setEmailError("Email already exists");
      } else {
        setEmailExists(false);
        setEmailError(null);
      }
    } catch (e) {
      setEmailError("Something went wrong");
      console.log(e);
    } finally {
      setIsDebouncing(false);
    }
  };

  // Create a debounced version of the validateEmail function
  const debouncedValidateEmail = useCallback(debounce(validateEmail, 2000), []);

  const handleEmailChange = (value: string) => {
    setEmailExists(null);
    debouncedValidateEmail(value);
    return value;
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <FormControl
      isReadOnly={isReadOnly}
      mb={4}
      isRequired={isRequired}
      {...rest}
    >
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
                focusBorderColor={isReadOnly ? "gray.300" : "primary.500"}
                _hover={{ borderColor: isReadOnly ? "gray.300" : "#000" }}
                borderRadius={"2px"}
                errorBorderColor="red.500"
                border={"1px solid"}
                borderColor={isReadOnly ? "gray.300" : "#000"}
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
          ) : type === "email" ? (
            <>
              <InputGroup>
                {leftIcon && (
                  <InputLeftElement
                    pointerEvents="none"
                    children={leftIcon}
                    color={"#000"}
                  />
                )}
                <Input
                  focusBorderColor={isReadOnly ? "gray.300" : "primary.500"}
                  _hover={{ borderColor: isReadOnly ? "gray.300" : "#000" }}
                  borderRadius={"2px"}
                  errorBorderColor="red.500"
                  border={"1px solid #000"}
                  value={value}
                  placeholder={placeholder}
                  type={"email"}
                  onChange={(e) => onChange(handleEmailChange(e.target.value))}
                />
                {rightIcon && (
                  <InputRightElement
                    pointerEvents="none"
                    children={rightIcon}
                    color={"#000"}
                  />
                )}
                {isDebouncing && (
                  <InputRightElement
                    pointerEvents="none"
                    children={<Spinner />}
                    color={"#000"}
                  />
                )}
                {emailExists ? (
                  <InputRightElement
                    pointerEvents="none"
                    children={<CircleX size={24} color="red" />}
                    color={"#000"}
                  />
                ) : (
                  <InputRightElement
                    pointerEvents="none"
                    children={<CircleCheckBig size={24} color="green" />}
                    color={"#000"}
                  />
                )}
              </InputGroup>
              {emailError && (
                <FormHelperText
                  color="red.400"
                  fontSize={{ base: "14px", md: "16px" }}
                  fontStyle={"italic"}
                  fontWeight={400}
                >
                  {emailError}
                </FormHelperText>
              )}
            </>
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
                focusBorderColor={isReadOnly ? "gray.300" : "primary.500"}
                _hover={{ borderColor: isReadOnly ? "gray.300" : "#000" }}
                borderRadius={"2px"}
                errorBorderColor="red.500"
                border={"1px solid #000"}
                value={value}
                cursor={isReadOnly ? "default" : "auto"}
                borderColor={isReadOnly ? "gray.300" : "#000"}
                placeholder={placeholder}
                type={type}
                mt={label ? 0 : 5}
                onChange={(e) => onChange(handleInputChange(e.target.value))}
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
      {message && (
        <FormHelperText color={"gray.800"} fontSize="xs" fontStyle={"italic"}>
          {message}
        </FormHelperText>
      )}
      {errorMessage && (
        <FormHelperText color={"red.400"} fontSize="xs" fontStyle={"italic"}>
          {errorMessage}
        </FormHelperText>
      )}
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
      {backError && (
        <FormHelperText
          color="red.400"
          fontSize={{ base: "14px", md: "16px" }}
          fontStyle={"italic"}
          fontWeight={400}
        >
          {backError[name]}
        </FormHelperText>
      )}
    </FormControl>
  );
};
