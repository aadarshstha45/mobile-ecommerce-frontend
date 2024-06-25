import { TextInput } from "@/components/Form";
import SelectInput from "@/components/Form/SelectInput";
import { Country } from "@/components/data";
import { IStepProps } from "@/utils/IStepProps";
import { Button, Flex, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import { useForm } from "react-hook-form";

const ShippingDetails = ({ stepProps }: IStepProps) => {
  const options = Country.map((country) => ({
    value: country.value,
    label: (
      <Flex align={"center"}>
        <ReactCountryFlag
          countryCode={country.value}
          svg
          style={{
            width: "1.5em",
            height: "1.5em",
            marginRight: "0.5em",
          }}
        />
        {country.label}
      </Flex>
    ),
  }));

  const { control, handleSubmit } = useForm({
    defaultValues: {
      country: "",
      province: "",
      city: "",
      street_name: "",
      postal_code: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    stepProps.nextStep();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
        <GridItem colSpan={1}>
          <SelectInput
            isControlled
            name="country"
            label="Country"
            control={control}
            width="full"
            options={options}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <TextInput name="province" label="Province" control={control} />
        </GridItem>
        <GridItem colSpan={1}>
          <TextInput name="city" label="City" control={control} />
        </GridItem>
        <GridItem colSpan={1}>
          <TextInput name="street_name" label="Street Name" control={control} />
        </GridItem>
        <GridItem colSpan={1}>
          <TextInput name="postal_code" label="Postal code" control={control} />
        </GridItem>
      </SimpleGrid>
      <HStack justify={"space-between"}>
        <Button
          type={"submit"}
          colorScheme={"primary"}
          w={"fit-content"}
          borderRadius={"2px"}
          onClick={stepProps.prevStep}
          size={"sm"}
        >
          Previous
        </Button>
        <Button
          type={"submit"}
          colorScheme={"primary"}
          w={"fit-content"}
          borderRadius={"2PX"}
          size={"sm"}
        >
          Proceed
        </Button>
      </HStack>
    </form>
  );
};

export default ShippingDetails;
