import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  ResponsiveValue,
} from "@chakra-ui/react";
import { Property } from "csstype";
import { CalendarIcon } from "lucide-react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import { Control, Controller, FieldErrors } from "react-hook-form";

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
  width?: any;
  isControlled?: boolean;
  [key: string]: any;
};

export const ReactDatePicker = ({
  label,
  control,
  name,
  isReadOnly,
  isRequired,
  errors,
  width,
  isControlled,
}: InputProps) => {
  const CustomInput = forwardRef<any, any>((props, ref) => {
    return (
      <InputGroup>
        <Input
          borderRadius={2}
          focusBorderColor={isReadOnly ? "gray.300" : "primary.500"}
          border={"1px solid #000"}
          _hover={{ borderColor: isReadOnly ? "gray.300" : "#000" }}
          {...props}
          ref={ref}
        />
        <InputRightElement
          userSelect="none"
          pointerEvents="none"
          children={<CalendarIcon />}
        />
      </InputGroup>
    );
  });
  return (
    <FormControl w={width ?? "100%"} mb={4} isRequired={isRequired}>
      <FormLabel fontSize={{ sm: "14px", md: "16px" }} fontWeight={450}>
        {label}
      </FormLabel>
      {isControlled}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <DatePicker
            selected={value}
            value={value}
            onChange={onChange}
            dateFormat="yyyy-MM-dd"
            customInput={<CustomInput />}
            readOnly={isReadOnly}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
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
