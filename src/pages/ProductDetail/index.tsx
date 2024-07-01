/* eslint-disable @typescript-eslint/no-explicit-any */
import { BaseURL } from "@/api/axiosSetup";
import { useFetchProductById } from "@/api/functions/Product";
import NoImage from "@/assets/images/NoImage.png";
import IconButton from "@/components/Form/IconButton";
import RadioBox from "@/components/Form/RadioBox";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import DetailTab from "./DetailTab";
import ProductFAQ from "./ProductFAQ";
import Queries from "./Queries";
import Ratings from "./Ratings";
import RelatedProducts from "./RelatedProducts";
import { colorOptions, sizeOptions } from "./data/options";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { data } = useFetchProductById(id!);
  console.log(data);
  const [count, setCount] = useState<number>(1);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      size: "m",
      color: "",
      quantity: count,
    },
  });

  const [displayImage, setDisplayImage] = useState<string>();

  const onSubmit = (data: any) => {
    console.log({
      ...data,
      quantity: count,
    });
  };

  useEffect(() => {
    if (data?.image) {
      setDisplayImage(data?.image);
    }
  }, [data?.image]);
  return (
    <Flex flexDir={"column"}>
      <Container
        maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
        id="product-detail"
        py={10}
      >
        <Flex flexDir={"column"} gap={10}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }} gap={10}>
            <Flex alignContent={"center"} flexDir={"column"} gap={10}>
              {displayImage ? (
                <Image
                  w={"full"}
                  aspectRatio={4 / 3}
                  src={`${BaseURL}/${displayImage}`}
                />
              ) : (
                <Flex
                  w={"full"}
                  aspectRatio={4 / 3}
                  align={"center"}
                  justify={"center"}
                >
                  <Image w={"200px"} h={"200px"} src={NoImage} />
                </Flex>
              )}

              {data?.product_images && (
                <Flex
                  sx={{
                    "&::-webkit-scrollbar": {
                      height: "5px", // Height of the scrollbar
                      backgroundColor: "transparent", // Background color of the scrollbar track
                      py: 100,
                    },
                    "&::-webkit-scrollbar-thumb": {
                      backgroundColor: "#4A57B3", // Color of the scrollbar thumb
                      borderRadius: "10px", // Rounded corners for the thumb
                      border: "3px solid #4A57B3", // Border to make it visible
                      scrollBehavior: "smooth",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      backgroundColor: "#404E9E", // Color of the thumb on hover
                    },
                    "&::-webkit-scrollbar-track": {
                      borderRadius: "10px", // Rounded corners for the track
                    },
                  }}
                  gap={2}
                  overflowX={"scroll"}
                >
                  {displayImage && (
                    <Image
                      w={40}
                      aspectRatio={4 / 3}
                      onClick={() => setDisplayImage(data?.image)}
                      src={`${BaseURL}/${data?.image}`}
                    />
                  )}
                  {data?.product_images.map((image: any) => (
                    <Image
                      w={40}
                      aspectRatio={4 / 3}
                      key={image.id}
                      onClick={() => setDisplayImage(image.image)}
                      src={`${BaseURL}/${image.image}`}
                    />
                  ))}
                </Flex>
              )}
            </Flex>
            <Flex gap={10}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex flexDir={"column"}>
                  <Text fontSize={"xl"}>{data?.name}</Text>
                  <Text fontSize={"sm"}>{data?.category?.name}</Text>

                  <Flex fontSize={"lg"} mt={4} gap={2}>
                    <Text>Available Quantity: </Text>
                    <Text>{data?.available_qty}</Text>
                  </Flex>

                  <Flex flexDir={"column"} mt={4} gap={2}>
                    <Text fontSize={"lg"}>Available Colors: </Text>

                    <RadioBox
                      options={colorOptions}
                      name="color"
                      bg={colorOptions[0].value + ".300"}
                      control={control}
                    />
                  </Flex>

                  <Divider
                    opacity={1}
                    borderColor={"primary.500"}
                    w={"full"}
                    my={4}
                  />

                  <Flex flexDir={"column"} mt={4} gap={2}>
                    <Text fontSize={"lg"}>Available Sizes: </Text>

                    <RadioBox
                      options={sizeOptions}
                      name="size"
                      control={control}
                    />
                  </Flex>

                  <Divider
                    opacity={1}
                    borderColor={"primary.500"}
                    w={"full"}
                    my={4}
                  />

                  <Flex flexDir={"column"} mt={4} gap={2}>
                    <Text fontSize={"lg"}>Quantity </Text>
                    <HStack gap={2}>
                      <IconButton
                        colorScheme="primary"
                        icon={<MinusIcon />}
                        borderRadius={0}
                        onClick={() => setCount(count - 1)}
                      />
                      <Text fontWeight={700} fontSize={"20px"}>
                        {count}
                      </Text>
                      <IconButton
                        colorScheme="primary"
                        icon={<AddIcon />}
                        borderRadius={0}
                        onClick={() => setCount(count + 1)}
                      />
                    </HStack>
                  </Flex>
                  <Divider
                    opacity={1}
                    borderColor={"primary.500"}
                    w={"full"}
                    my={4}
                  />
                </Flex>
                <Button type="submit">Add to Cart</Button>
              </form>
            </Flex>
          </Grid>
          <DetailTab description={data?.description} />
          <Divider opacity={1} borderColor={"gray.300"} />
          <Ratings />
          <Divider
            alignSelf={"center"}
            borderColor={"gray.300"}
            opacity={1}
            w={{ base: "full", md: "70%" }}
          />
          <RelatedProducts />
        </Flex>
      </Container>
      <ProductFAQ />
      <Queries />
    </Flex>
  );
}

export default ProductDetail;
