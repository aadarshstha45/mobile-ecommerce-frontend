/* eslint-disable @typescript-eslint/no-explicit-any */
import { isAuthenticated } from "@/api/axiosSetup";
import { useAddToCart } from "@/api/functions/Cart";
import { useFetchProductById } from "@/api/functions/Product";
import { useSaveWishlist } from "@/api/functions/Wishlist";
import ShoppingCart from "@/assets/icons/ShoppingCart";
import NoImage from "@/assets/images/NoImage.png";
import BreadCrumbs from "@/components/BreadCrumbs";
import RadioBox from "@/components/Form/RadioBox";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  GridItem,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useDisclosure,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { HeartIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import ModalLogin from "../Auth/ModalLogin";
import DetailTab from "./DetailTab";
import ProductFAQ from "./ProductFAQ";
import Queries from "./Queries";
import Ratings from "./Ratings";
import RelatedProducts from "./RelatedProducts";

function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { data, isPending } = useFetchProductById(id!);
  console.log("data", data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [count, setCount] = useState<number>(1);
  const addToCart = useAddToCart();
  const addToWishList = useSaveWishlist();
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
  const [colorImages, setColorImages] = useState<any[]>([]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setPrice(data?.price);
  }, [data?.price]);

  useEffect(() => {
    if (data?.image) {
      setDisplayImage(data?.image);
    }
  }, [data?.image]);

  useEffect(() => {
    if (data?.product_properties) {
      reset({
        product_id: id,
        size_id: data?.product_properties[0]?.sizes[0]?.size?.id ?? "",
        color_id: data?.product_properties[0]?.color?.id ?? "",
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
          value: parseInt(size.size?.id),
          price: parseFloat(size?.price ?? data.price),
        }));
        if (sizes && sizes.length > 0) {
          setSizeId(sizes[0].value);
          setValue("size_id", sizes[0].value);
          setSizeOptions(sizes);
          setPrice(sizes[0].price ?? data.price);
        } else {
          setPrice(selectedColor.price);
          setSizeOptions([]);
        }

        const images = selectedColor.images;
        if (images && images.length > 0) {
          setColorImages(images);
          setDisplayImage(images[0].image);
        } else if (data?.product_images && data.product_images.length > 0) {
          setColorImages(data?.product_images);
          setDisplayImage(data?.product_images[0].image);
        } else {
          setColorImages([]);
          setDisplayImage(data?.image);
        }
      } else {
        const sizes = data.product_properties?.[0]?.sizes?.map((size: any) => ({
          label: size.size?.name,
          value: parseInt(size.size?.id),
          price: parseFloat(size?.price ?? data.price),
        }));
        if (sizes) {
          setSizeId(sizes[0].value);
          setValue("size_id", sizes[0].value);
          setSizeOptions(sizes);
        }
        const images = data.product_properties?.[0]?.images;
        if (images && images.length > 0) {
          setColorImages(images);
        }
      }
    }
  }, [data?.product_properties, colorId]);

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

  const onSubmit = async (data: any) => {
    if (isAuthenticated) {
      console.log("data", data);
      await addToCart.mutateAsync({
        ...data,
        quantity: count,
      });
    } else {
      onOpen();
    }
  };

  const handleWishList = async () => {
    if (isAuthenticated) {
      await addToWishList.mutateAsync({
        product_id: id,
      });
    } else {
      onOpen();
    }
  };

  return (
    <Flex flexDir={"column"}>
      <Box p={1} bg={"#F0F0F0"}>
        <Container maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}>
          <BreadCrumbs />
        </Container>
      </Box>
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
              <SimpleGrid columns={{ base: 1, sm: 2 }} spacingX={6} spacing={4}>
                <GridItem colSpan={1}>
                  <Flex
                    flexDir={"column"}
                    align={"center"}
                    justify={"center"}
                    gap={10}
                  >
                    {displayImage ? (
                      <Image
                        w={{ base: "250px", md: "70%" }}
                        aspectRatio={1 / 1}
                        src={`${displayImage}`}
                        objectFit={"cover"}
                        objectPosition={"center"}
                      />
                    ) : (
                      <Flex
                        aspectRatio={1 / 1}
                        align={"center"}
                        justify={"center"}
                      >
                        <Image
                          w={{ base: "250px", md: "70%" }}
                          justifySelf={"center"}
                          aspectRatio={1 / 1}
                          src={NoImage}
                        />
                      </Flex>
                    )}

                    {colorImages && (
                      <Flex
                        sx={{
                          "&::-webkit-scrollbar": {
                            height: "5px", // Height of the scrollbar
                            backgroundCol1or: "transparent", // Background color of the scrollbar track
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
                        alignSelf={"start"}
                      >
                        {displayImage && (
                          <Image
                            w={{ base: "100px", md: "150px" }}
                            aspectRatio={1 / 1}
                            onClick={() => setDisplayImage(data?.image)}
                            src={`${data?.image}`}
                            objectFit={"cover"}
                            border={displayImage === data?.image ? "1px" : "0"}
                            borderColor={"primary.500"}
                          />
                        )}
                        {colorImages.map((image: any) => (
                          <Image
                            objectFit={"cover"}
                            w={{ base: "100px", md: "150px" }}
                            aspectRatio={1 / 1}
                            key={image.index}
                            onClick={() => setDisplayImage(image.image)}
                            src={`${image.image}`}
                            border={displayImage === image.image ? "1px" : "0"}
                            borderColor={"primary.500"}
                          />
                        ))}
                      </Flex>
                    )}
                  </Flex>
                </GridItem>
                <GridItem colSpan={1}>
                  <Flex gap={10}>
                    <ModalLogin isOpen={isOpen} onClose={onClose} />
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Flex flexDir={"column"}>
                        <Text fontSize={{ base: "16px", md: "18px" }}>
                          {data?.name}
                        </Text>
                        <Text
                          mt={2}
                          textColor={"#939292"}
                          fontSize={{
                            base: "12px",
                            md: "14px ",
                          }}
                        >
                          {data?.category?.name}
                        </Text>
                        {colorOptions.length > 0 && (
                          <>
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"primary.500"}
                              py={4}
                              flexDir={"column"}
                              gap={2}
                            >
                              <Text
                                fontSize={{
                                  base: "12px",
                                  md: "14px",
                                  lg: "16px",
                                }}
                              >
                                Available Colors:{" "}
                              </Text>

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
                          </>
                        )}
                        {sizeOptions && sizeOptions.length > 0 && (
                          <>
                            <Flex
                              borderBottom={"1px solid"}
                              borderColor={"primary.500"}
                              py={4}
                              flexDir={"column"}
                              gap={2}
                            >
                              <Text
                                fontSize={{
                                  base: "12px",
                                  md: "14px",
                                  lg: "16px",
                                }}
                              >
                                Available Sizes:{" "}
                              </Text>
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
                          </>
                        )}
                        <Flex
                          borderBottom={"1px solid"}
                          borderColor={"primary.500"}
                          py={4}
                          flexDir={"column"}
                          gap={2}
                        >
                          <Text
                            fontSize={{
                              base: "12px",
                              md: "14px",
                              lg: "16px",
                            }}
                          >
                            Quantity{" "}
                          </Text>
                          <HStack gap={3}>
                            <IconButton
                              aria-label="decrement"
                              colorScheme="primary"
                              icon={<MinusIcon />}
                              borderRadius={0}
                              size={"xs"}
                              isDisabled={count === 1}
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
                      </Flex>
                      <Stack py={4} gap={4}>
                        <HStack>
                          {data?.discount && (
                            <Text
                              fontSize={{
                                base: "12px",
                                sm: "14px",
                                lg: "16px",
                              }}
                              fontWeight={500}
                            >
                              Rs.
                              {price &&
                                (price * (1 - data?.discount / 100)).toFixed(2)}
                            </Text>
                          )}
                          <Text
                            fontSize={
                              data?.discount
                                ? { base: "10px", sm: "12px", lg: "14px" }
                                : { base: "12px", sm: "14px", lg: "16px" }
                            }
                            textColor={data?.discount ? "#939292" : ""}
                            textDecoration={
                              data?.discount ? "line-through" : "none"
                            }
                            fontWeight={data?.discount ? 400 : 500}
                          >
                            Rs. {price?.toFixed(2)}
                          </Text>
                        </HStack>

                        <Wrap gap={4}>
                          <WrapItem>
                            <Button
                              colorScheme="primary"
                              w={"fit-content"}
                              borderRadius={0}
                              fontWeight={400}
                              fontSize={{
                                base: "12px",
                                md: "14px",
                                lg: "16px",
                              }}
                              size={"sm"}
                              rightIcon={
                                <ShoppingCart stroke={"white"} boxSize={5} />
                              }
                              isLoading={addToCart.isPending}
                              type={"submit"}
                            >
                              Add to Cart
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              colorScheme="primary"
                              w={"fit-content"}
                              borderRadius={0}
                              fontWeight={400}
                              fontSize={{
                                base: "12px",
                                md: "14px",
                                lg: "16px",
                              }}
                              size={"sm"}
                              rightIcon={<HeartIcon />}
                              variant={"outline"}
                              isLoading={addToWishList.isPending}
                              onClick={handleWishList}
                            >
                              Add to WishList
                            </Button>
                          </WrapItem>
                        </Wrap>
                      </Stack>
                    </form>
                  </Flex>
                </GridItem>
              </SimpleGrid>
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
