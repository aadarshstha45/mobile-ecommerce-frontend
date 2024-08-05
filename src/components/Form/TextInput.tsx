/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseURL } from "@/api/axiosSetup";
import { CheckIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
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
  Textarea,
} from "@chakra-ui/react";
import axios from "axios";
import { Property } from "csstype";
import { X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import IconButton from "./IconButton";
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
  singleDate?: boolean;
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
  singleDate,
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [backError, setBackError] = useState<any>(null);
  const [errorMessages, setErrorMessages] = useState<string | undefined>(
    undefined
  );
  useEffect(() => {
    setBackError(backErrors);
  }, [backErrors]);

  useEffect(() => {
    setErrorMessages(errorMessage);
  }, [errorMessage]);

  const handleInputChange = (value: string) => {
    setBackError(null);
    setErrorMessages(undefined);
    return value;
  };

  const [emailError, setEmailError] = useState<string | null>(null);
  const [emailExists, setEmailExists] = useState<boolean | null>(false);
  const [isDebouncing, setIsDebouncing] = useState(false);
  const [displayCheckIcon, setDisplayCheckIcon] = useState(false);

  const validateEmail = async (email: string) => {
    setIsDebouncing(true);
    setDisplayCheckIcon(true);

    try {
      const response = await axios.get(
        `${baseURL}check-unique-email?email=${email}`
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
    } finally {
      setIsDebouncing(false);
    }
  };

  // Create a debounced version of the validateEmail function
  const debouncedValidateEmail = useCallback(debounce(validateEmail, 1000), []);

  const handleEmailChange = (value: string) => {
    setIsDebouncing(true);
    setEmailExists(null);
    setDisplayCheckIcon(false);
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
      {label && (
        <FormLabel
          mb={2}
          fontSize={{ sm: "14px", md: "16px" }}
          fontWeight={450}
        >
          {label}
        </FormLabel>
      )}
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
                _hover={{ borderColor: "gray.400" }}
                errorBorderColor="red.500"
                border={"1px solid"}
                borderColor={
                  isReadOnly
                    ? "gray.300"
                    : (errors && errors[name]) ||
                      (backErrors && backErrors[name])
                    ? "red.500"
                    : "gray.300"
                }
                placeholder={placeholder}
                onChange={(e) => onChange(handleInputChange(e.target.value))}
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
                  color={"#000"}
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
                  borderColor={
                    isReadOnly
                      ? "gray.300"
                      : backError && backError[name]
                      ? "red.500"
                      : "gray.300"
                  }
                  focusBorderColor={isReadOnly ? "gray.300" : "primary.500"}
                  _hover={{ borderColor: "gray.400" }}
                  errorBorderColor="red.500"
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
                    children={
                      <Spinner
                        thickness="3px"
                        speed="0.65s"
                        color="primary.500"
                      />
                    }
                    color={"#000"}
                  />
                )}

                <InputRightElement
                  opacity={!isDebouncing && displayCheckIcon ? 1 : 0}
                  pointerEvents="none"
                  children={
                    !emailExists ? (
                      <CheckIcon color={"green.500"} />
                    ) : (
                      <X color="red" />
                    )
                  }
                  color={"#000"}
                />
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
          ) : type === "textarea" ? (
            <Textarea
              focusBorderColor={isReadOnly ? "gray.300" : "primary.500"}
              _hover={{ borderColor: isReadOnly ? "gray.300" : "#000" }}
              borderRadius={"2px"}
              errorBorderColor={"red"}
              border={"1px solid #000"}
              value={value}
              cursor={isReadOnly ? "default" : "auto"}
              borderColor={
                isReadOnly
                  ? "gray.300"
                  : errors && errors[name]
                  ? "red.500"
                  : "#000"
              }
              placeholder={placeholder}
              onChange={onChange}
            />
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
                _hover={{ borderColor: "gray.400" }}
                errorBorderColor={"red"}
                value={value}
                cursor={isReadOnly ? "default" : "auto"}
                borderColor={
                  isReadOnly
                    ? "gray.300"
                    : errors && errors[name]
                    ? "red.500"
                    : "gray.300"
                }
                placeholder={placeholder}
                type={type}
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
      {errorMessages && (
        <FormHelperText color={"red.400"} fontStyle={"italic"}>
          {errorMessages}
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
