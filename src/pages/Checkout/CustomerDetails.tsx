/* eslint-disable @typescript-eslint/no-explicit-any */
import PhoneInput from "@/components/Form/PhoneInput";
import { TextInput } from "@/components/Form/TextInput";
import { IStepProps } from "@/utils/IStepProps";
import { Button, Flex, GridItem, HStack, SimpleGrid } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const CustomerDetails = ({ stepProps }: IStepProps) => {
  const [selectedCountry, setSelectedCountry] = useState<any>("+977"); // [1
  const { control, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      alternate_phone: "",
    },
  });

  const handleSelectChange = (selectedOption: any) => {
    setSelectedCountry(selectedOption.value);
    console.log(selectedOption.value);
    //     if (selectedOption) {
    //       console.log(selectedOption);
    //       const filtered = data.filter(
    //         (item) => item.value === selectedOption.value
    //       );
    //       console.log(filtered);
    //       setFilteredData(filtered);
    //     } else {
    //       setFilteredData(data);
    //     }
  };

  const onsubmit = (data: any) => {
    console.log({
      ...data,
      phone: `${selectedCountry}${data.phone}`,
    });
    stepProps.nextStep();
  };

  return (
    <Flex flexDir={"column"} gap={4}>
      <Flex
        w={"full"}
        as={"form"}
        onSubmit={handleSubmit(onsubmit)}
        gap={4}
        justify={"center"}
      >
        <Flex
          flexDir={"column"}
          gap={4}
          w={{ base: "full", md: "60%", lg: "40%" }}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <TextInput
                label={"First Name"}
                name={"firstName"}
                control={control}
                isRequired
              />
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <TextInput
                label={"Last Name"}
                name={"lastName"}
                control={control}
                isRequired
              />
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <TextInput
                label={"Email"}
                name={"email"}
                control={control}
                isRequired
              />
            </GridItem>
            <GridItem colSpan={{ base: 2, md: 1 }}>
              <TextInput
                label={"Address"}
                name={"address"}
                control={control}
                isRequired
              />
            </GridItem>
            <GridItem colSpan={2}>
              <PhoneInput
                handleChange={handleSelectChange}
                label={"Phone"}
                name={"phone"}
                control={control}
                isRequired
              />
            </GridItem>
            <GridItem colSpan={2}>
              <PhoneInput
                handleChange={handleSelectChange}
                label={"Alternate Phone"}
                name={"alternate_phone"}
                control={control}
              />
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
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomerDetails;
