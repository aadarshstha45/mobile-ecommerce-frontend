import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  ResponsiveValue,
} from "@chakra-ui/react";
import { Property } from "csstype";
import { Control, Controller, FieldErrors } from "react-hook-form";
import "rsuite/DatePicker/styles/index.css";
type InputProps = {
  label?: string;
  control: Control<any>;
  name: string;
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

  [key: string]: any;
};

export const DatePicker = ({
  label,
  control,
  name,
  isReadOnly,
  isRequired,
  placeholder,
  errors,
}: InputProps) => {
  return (
    <FormControl mb={4} isReadOnly={isReadOnly} isRequired={isRequired}>
      <FormLabel fontSize={{ sm: "14px", md: "16px" }} fontWeight={450}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
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
            onChange={onChange}
            type="date"
          />
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
