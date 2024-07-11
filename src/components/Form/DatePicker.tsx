import {
  FormControl,
  FormHelperText,
  FormLabel,
  ResponsiveValue,
} from "@chakra-ui/react";
import { Property } from "csstype";
import { CalendarIcon } from "lucide-react";
import { Control, Controller, FieldErrors } from "react-hook-form";
import { SimpleDatePicker } from "simple-chakra-ui-datepicker";

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
  width?: string;
  isControlled?: boolean;
  [key: string]: any;
};

const formatDateToLocalISOString = (date: Date) => {
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60 * 1000);
  return localDate.toISOString().split("T")[0];
};

export const DatePicker = ({
  label,
  control,
  name,
  isReadOnly,
  isRequired,
  placeholder,
  errors,
  width,
  isControlled,
}: InputProps) => {
  return (
    <FormControl
      w={width ?? "100%"}
      mb={4}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
    >
      <FormLabel fontSize={{ sm: "14px", md: "16px" }} fontWeight={450}>
        {label}
      </FormLabel>
      {isControlled}
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <SimpleDatePicker
            withArrow={true}
            inputProps={{
              borderRadius: "2px",
              errorBorderColor: "red.500",
              border: "1px solid #000",
              borderColor: isReadOnly ? "gray.300" : "#000",
              focusBorderColor: isReadOnly ? "gray.300" : "primary.500",
              _hover: { borderColor: isReadOnly ? "gray.300" : "#000" },
              isDisabled: isReadOnly,
              _disabled: {
                bg: "transparent",
                cursor: "auto",
              },
              value: value ? formatDateToLocalISOString(new Date(value)) : "",
              onChange: (e) => {
                const date = new Date(e.target.value);
                onChange(date);
              },
            }}
            onChange={(date) => {
              onChange(formatDateToLocalISOString(date!));
            }}
            placeholder={placeholder ?? "Select Date"}
            formatDate={(date) => {
              return formatDateToLocalISOString(date);
            }}
            todayLabel="Today"
            inactiveColor="gray.100"
            dateBorderRadius={"2px"}
            icon={<CalendarIcon />}
            colorSchema="primary"
            activeColor="primary.500"
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
