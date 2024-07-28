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

const formatDateToLocalISOString = (date: Date) => {
  const offset = date.getTimezoneOffset();
  const localDate = new Date(date.getTime() - offset * 60 * 1000);
  return localDate.toISOString().split("T")[0];
};

const CustomInput = forwardRef<any, any>((props, ref) => {
  return (
    <InputGroup>
      <Input
        borderRadius={2}
        focusBorderColor="primary.500"
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

const convert = (selected: any) => {
  console.log("selected", selected);
  const day = selected.getDate();
  const month =
    selected.getMonth() >= 10
      ? selected.getMonth() + 1
      : `0${selected.getMonth() + 1}`;
  const year = selected.getFullYear();

  return `${year}/${month}/${day}`;
};

export const ReactDatePicker = ({
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
          <DatePicker
            value={new Date(value).toISOString().split("T")[0]}
            onChange={onChange}
            dateFormat="dd/MM/yyyy"
            showPopperArrow={false}
            customInput={<CustomInput />}
            className="form-control"
            dateFormatCalendar="MMMM yyyy"
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
