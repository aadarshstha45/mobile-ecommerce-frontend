/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddToCart } from "@/api/functions/Cart";
import { useFetchProductById } from "@/api/functions/Product";
import ShoppingCart from "@/assets/icons/ShoppingCart";
import NoImage from "@/assets/images/NoImage.png";
import RadioBox from "@/components/Form/RadioBox";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  IconButton,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import DetailTab from "./DetailTab";
import ProductFAQ from "./ProductFAQ";
import Queries from "./Queries";
import Ratings from "./Ratings";
import RelatedProducts from "./RelatedProducts";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { data, isPending } = useFetchProductById(id!);
  const [count, setCount] = useState<number>(1);
  const addToCart = useAddToCart();

  const [colorOptions, setColorOptions] = useState<any[]>([]);
  const [sizeOptions, setSizeOptions] = useState<any[]>([]);
  const [colorId, setColorId] = useState<number>(
    data?.product_properties[0]?.color?.id
  );
  const [sizeId, setSizeId] = useState<number>(
    data?.product_properties[0]?.sizes[0]?.size?.id
  );
  const [price, setPrice] = useState<number | null>(null);
  const { control, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      product_id: id,
      size_id: "",
      color_id: "",
      quantity: count,
    },
  });
  const [displayImage, setDisplayImage] = useState<string>();

  const onSubmit = async (data: any) => {
    await addToCart.mutateAsync({
      ...data,
      quantity: count,
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (data?.image) {
      setDisplayImage(data?.image);
    }
  }, [data?.image]);

  useEffect(() => {
    if (data?.product_properties) {
      reset({
        product_id: id,
        size_id: data?.product_properties[0]?.sizes[0]?.size?.id,
        color_id: data?.product_properties[0]?.color?.id,
        quantity: count,
      });
    }
  }, [data?.product_properties]);

  useEffect(() => {
    if (data?.product_properties) {
      const colors = data?.product_properties?.map((property: any) => ({
        label: property.color?.name,
        value: property.color?.id,
        color: property.color?.hex_value,
      }));
      if (colors) {
        setColorOptions(colors);
      }
      const selectedColor = data.product_properties.find((property: any) => {
       
        return property.color?.id === colorId;
      });
      if (selectedColor) {
        const sizes = selectedColor.sizes.map((size: any) => ({
          label: size.size?.name,
          value: size.size?.id,
          price: size?.price,
        }));
        setSizeOptions(sizes);
      } else {
        const sizes = data.product_properties?.[0]?.sizes?.map((size: any) => ({
          label: size.size?.name,
          value: size.size?.id,
          price: size?.price,
        }));
        if (sizes) {
          setSizeOptions(sizes);
        }
      }
    }
  }, [data?.product_properties, colorId]);

  useEffect(() => {
  }, [colorOptions]);

  useEffect(() => {
    // Ensure reset is called only when sizeOptions and colorOptions are available and not empty
    if (sizeOptions?.length > 0 && colorOptions?.length > 0) {
      const selectedSize = sizeOptions?.find(
        (property: any) => property.value === sizeId
      );
      if (selectedSize) {
        setPrice(selectedSize.price);
      }
    }
  }, [sizeId]);

  return (
    <Flex flexDir={"column"}>
      <Container
        maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
        id="product-detail"
        py={10}
      >
        <Flex flexDir={"column"} gap={10}>
          {isPending ? (
            <Flex
              justifyContent={"center"}
              alignItems="center"
              height={"100vh"}
            >
              <LoadingSpinner />
            </Flex>
          ) : (
            <>
              <Grid
                templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }}
                gap={10}
              >
                <Flex alignContent={"center"} flexDir={"column"} gap={10}>
                  {displayImage ? (
                    <Image
                      w={"full"}
                      aspectRatio={4 / 3}
                      src={`${displayImage}`}
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
                          src={`${data?.image}`}
                        />
                      )}
                      {data?.product_images.map((image: any) => (
                        <Image
                          w={40}
                          aspectRatio={4 / 3}
                          key={image.id}
                          onClick={() => setDisplayImage(image.image)}
                          src={`${image.image}`}
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
                        <Text>{data?.available_quantity}</Text>
                      </Flex>
                      {colorOptions.length > 0 && (
                        <>
                          <Flex flexDir={"column"} mt={4} gap={2}>
                            <Text fontSize={"lg"}>Available Colors: </Text>

                            <RadioBox
                              handleChange={(value: string) => {
                                setValue("color_id", value);
                                setColorId(parseInt(value));
                              }}
                              options={colorOptions}
                              name="color_id"
                              control={control}
                            />
                          </Flex>
                          <Divider
                            opacity={1}
                            borderColor={"primary.500"}
                            w={"full"}
                            my={4}
                          />
                        </>
                      )}
                      {sizeOptions && sizeOptions.length > 0 && (
                        <>
                          <Flex flexDir={"column"} gap={2}>
                            <Text fontSize={"lg"}>Available Sizes: </Text>

                            <RadioBox
                              handleChange={(value: string) => {
                                setValue("size_id", value);
                                setSizeId(parseInt(value));
                              }}
                              options={sizeOptions}
                              name="size_id"
                              control={control}
                            />
                          </Flex>

                          <Divider
                            opacity={1}
                            borderColor={"primary.500"}
                            w={"full"}
                            my={4}
                          />
                        </>
                      )}
                      <Flex flexDir={"column"} gap={2}>
                        <Text fontSize={"lg"}>Quantity </Text>
                        <HStack gap={3}>
                          <IconButton
                            aria-label="decrement"
                            colorScheme="primary"
                            icon={<MinusIcon />}
                            borderRadius={0}
                            size={"xs"}
                            onClick={() => setCount(count - 1)}
                          />
                          <Text fontWeight={700} fontSize={"20px"}>
                            {count}
                          </Text>
                          <IconButton
                            aria-label="increment"
                            size={"xs"}
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
                    <Stack gap={4}>
                      <Text fontSize={"lg"}>
                        Price: Rs. {price ?? data?.price}
                      </Text>
                      <HStack gap={4}>
                        <Button
                          colorScheme="primary"
                          w={"fit-content"}
                          borderRadius={0}
                          fontWeight={400}
                          fontSize={"sm"}
                          rightIcon={
                            <ShoppingCart stroke={"white"} boxSize={5} />
                          }
                          isLoading={addToCart.isPending}
                          type="submit"
                        >
                          Add to Cart
                        </Button>
                        <Button
                          colorScheme="primary"
                          w={"fit-content"}
                          borderRadius={0}
                          fontWeight={400}
                          fontSize={"sm"}
                          rightIcon={<HeartIcon />}
                          variant={"outline"}
                        >
                          Add to WishList
                        </Button>
                      </HStack>
                    </Stack>
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
            </>
          )}
        </Flex>
      </Container>
      <ProductFAQ />
      <Queries />
    </Flex>
  );
}

export default ProductDetail;
