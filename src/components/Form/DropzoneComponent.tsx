/* eslint-disable @typescript-eslint/no-explicit-any */
import { DeleteIcon } from "@chakra-ui/icons";
import {
  Card,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  IconButton,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Dropzone from "react-dropzone";
import { Control, Controller, FieldErrors } from "react-hook-form";

type DropzoneProps = {
  name: string;
  message?: string;
  control: Control<any>;
  onDrop?: (acceptedFiles: any) => void;
  label?: string;
  onDelete: () => void;
  image: File | null;
  errors?: FieldErrors;
  isRequired?: boolean;
  helperText?: string;
};

export default function DropzoneComponent({
  name,
  message,
  control,
  onDrop,
  label,
  image,
  onDelete,
  isRequired,
  helperText,
  errors,
}: DropzoneProps) {
  const { colorMode } = useColorMode();
  return (
    <FormControl mb={4} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Card
        border={"1px"}
        borderColor={errors && errors[name] ? "red.300" : "gray.200"}
        p={4}
        bg={"#f5f5f5"}
      >
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Dropzone
              onDrop={(acceptedFiles) => {
                field.onChange(acceptedFiles[0]); // Update form controller value
                onDrop && onDrop(acceptedFiles);
              }}
            >
              {({ getRootProps, getInputProps }) => (
                <Flex
                  minH={40}
                  mb={4}
                  flexDir="column"
                  {...getRootProps()}
                  border={"3px dashed"}
                  p={6}
                  bg={"gray.100"}
                  _hover={{
                    bg: "gray.200",
                  }}
                  cursor={"pointer"}
                  borderColor={"gray.500"}
                  gap={4}
                  align={"center"}
                  textAlign={"center"}
                  justify={"center"}
                  borderRadius={"lg"}
                >
                  <input {...getInputProps()} />

                  <Text>{message}</Text>

                  {image && (
                    <Flex
                      align="center"
                      gap={2}
                      flexDir="column"
                      position="relative"
                      overflow={"hidden"}
                    >
                      <Image
                        w={{ base: "auto", sm: "200px" }}
                        h={"200px"}
                        objectFit="cover"
                        border={"1px"}
                        borderColor={"gray.500"}
                        borderRadius={"5px"}
                        src={
                          image
                            ? typeof image === "string"
                              ? `${image}`
                              : URL.createObjectURL(image)
                            : ""
                        }
                        alt={
                          typeof image === "string"
                            ? "Uploaded Image"
                            : image.name
                        }
                      />

                      <Text
                        pos={"absolute"}
                        bottom={0}
                        left={0}
                        right={0}
                        bg={"white"}
                        opacity={0.9}
                        textColor={"black"}
                        fontSize={"sm"}
                        p={2}
                        overflow={"hidden"}
                        whiteSpace={"nowrap"} // Prevent text wrapping
                        textOverflow={"ellipsis"} // Truncate text with ellipsis
                      >
                        {image.name}
                      </Text>
                      <IconButton
                        alignSelf={"center"}
                        aria-label="Delete Image"
                        icon={<DeleteIcon />}
                        bg={"white"}
                        borderRadius={5}
                        opacity={0.8}
                        textColor="black"
                        size="sm"
                        position="absolute"
                        top={0}
                        right={0}
                        onClick={(event) => {
                          event.stopPropagation();
                          onDelete();
                          field.onChange(null);
                        }}
                      />
                    </Flex>
                  )}
                </Flex>
              )}
            </Dropzone>
          )}
        />
      </Card>
      {helperText && (
        <FormHelperText
          color={colorMode === "light" ? "gray.800" : "gray.100"}
          fontSize="xs"
          fontStyle={"italic"}
        >
          {helperText}
        </FormHelperText>
      )}
      {errors && (
        <FormHelperText color="red.500">
          {(errors[name] as any)?.message}
        </FormHelperText>
      )}
    </FormControl>
  );
}
