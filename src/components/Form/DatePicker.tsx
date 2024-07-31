import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { CalendarIcon, X } from "lucide-react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import { Control, Controller, FieldErrors } from "react-hook-form";

type InputProps = {
  label?: string;
  control: Control<any>;
  name: string;
  isRequired?: boolean;
  errors?: FieldErrors;
  isClearable?: boolean;
  isReadOnly?: boolean;
  width?: any;
  isControlled?: boolean;
  [key: string]: any;
  ranged?: boolean;
  startDate?: any;
  endDate?: any;
  placeholder?: string;
  onClear?: () => void;
};

export const ReactDatePicker = ({
  label,
  control,
  name,
  isReadOnly,
  isRequired,
  errors,
  width,
  handleChange,
  ranged,
  startDate,
  endDate,
  placeholder,
  isClearable,
  onClear,
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
          pointerEvents={isClearable ? "all" : "none"}
          cursor={isClearable ? "pointer" : "default"}
          onClick={onClear}
          bg={"transparent"}
          children={isClearable ? <X /> : <CalendarIcon />}
        />
      </InputGroup>
    );
  });

  return (
    <FormControl w={width ?? "100%"} mb={4} isRequired={isRequired}>
      <FormLabel fontSize={{ sm: "14px", md: "16px" }} fontWeight={450}>
        {label}
      </FormLabel>
      <Controller
        name={name}
        control={control}
        render={({ field }) =>
          !ranged ? (
            <DatePicker
              selected={field.value}
              value={field.value}
              onChange={field.onChange}
              dateFormat="yyyy-MM-dd"
              customInput={<CustomInput />}
              readOnly={isReadOnly}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              placeholderText={placeholder}
              dropdownMode="select"
            />
          ) : (
            <DatePicker
              onChange={handleChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              dateFormat="yyyy-MM-dd"
              customInput={<CustomInput />}
              readOnly={isReadOnly}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              clearButtonTitle="Clear"
              todayButton="Today"
              placeholderText={placeholder}
            />
          )
        }
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
