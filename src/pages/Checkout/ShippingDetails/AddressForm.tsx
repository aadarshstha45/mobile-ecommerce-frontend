import { useAddAddress } from "@/api/auth";
import { PhoneInput, SelectInput, TextInput } from "@/components/Form";
import Checkbox from "@/components/Form/Checkbox";
import { ModalForm } from "@/components/Form/ModalForm";
import { countryOptions } from "@/components/Form/SelectInput";
import { CountryCodes } from "@/components/data";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface AddressFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddressForm = ({ isOpen, onClose }: AddressFormProps) => {
  const [country, setCountry] = useState<string>("Nepal");
  const [countryCode, setCountryCode] = useState("+977");
  const addAddress = useAddAddress();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      country: "",
      city: "",
      address: "",
      street: "",
      landmark: "",
      recipient_name: "",
      phone_number: "",
      is_billing_address: false,
    },
  });

  const onSubmit = async (data: any) => {
    await addAddress.mutateAsync({
      ...data,
      country,
      country_code: countryCode,
    });
    onClose();
  };
  return (
    <ModalForm
      form="shipping-address-form"
      isOpen={isOpen}
      onClose={onClose}
      heading="Add Address"
      onSubmit={handleSubmit(onSubmit)}
      isLoading={addAddress.isPending}
      isDisabled={addAddress.isPending}
    >
      <SelectInput
        width="full"
        label="Country"
        options={countryOptions}
        name="country"
        isControlled
        isRequired
        defaultValue={country}
        handleChange={(selectedOption: any) => {
          setCountry(selectedOption.value);
          setCountryCode(selectedOption.dial_code);
        }}
        placeholder="Select Country"
        control={control}
      />
      <TextInput label="City" control={control} name="city" isRequired />
      <TextInput label="Address" control={control} name="address" />
      <TextInput label="Street" control={control} name="street" />
      <TextInput label="Landmark" control={control} name="landmark" />
      <TextInput
        label="Recipient Name"
        control={control}
        name="recipient_name"
        isRequired
      />
      <PhoneInput
        defaultValue={CountryCodes}
        handleChange={(selectedOption: any) => {
          setCountry(selectedOption.name);
          setCountryCode(selectedOption.value);
        }}
        name="phone_number"
        label="Phone Number"
        control={control}
        errors={errors}
        isRequired
      />
      <Checkbox
        control={control}
        name="is_billing_address"
        label="Set as default billing address"
      />
    </ModalForm>
  );
};

export default AddressForm;
