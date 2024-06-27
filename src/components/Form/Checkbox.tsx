import { Checkbox as Check, FormControl } from "@chakra-ui/react";
import { Control, Controller } from "react-hook-form";

interface CheckboxProps {
  name: string;
  control?: Control<any>;
  label?: string;
  checked?: boolean;
  isReadOnly?: boolean;
  isRequired?: boolean;
}

const Checkbox = ({
  label,
  name,
  control,
  checked,
  isReadOnly,
  isRequired,
}: CheckboxProps) => {
  return (
    <FormControl mb={4} isRequired={isRequired} isReadOnly={isReadOnly}>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange } }) => (
          <Check
            isChecked={checked}
            colorScheme="primary"
            value={value}
            onChange={onChange}
          >
            {label}
          </Check>
        )}
      />
    </FormControl>
  );
};

export default Checkbox;
