import { useAddViewAction } from "@/api/functions/Product";
import { useFetchWishlist, useSaveWishlist } from "@/api/functions/Wishlist";
import ModalLogin from "@/pages/Auth/ModalLogin";
import TokenService from "@/services/service-token";
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Icon,
  Image,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Heart, ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LazyLoadImage from "../Image";

export const columnBreakpoints = {
  0: 1,
  350: 2,
  850: 3,
  1300: 4,
};
interface ItemDisplayProps {
  data: any;
  colorOptions?: any;
  discountPercent?: number;
  imageWidth?: string;
}

const ItemDisplay = ({
  data,
  colorOptions,
  discountPercent,
  imageWidth,
}: ItemDisplayProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data: wishData } = useFetchWishlist();
  const [isInWishList, setIsInWishList] = useState(false);
  const wishlist = useSaveWishlist();
  const handleWishList = async (id: string) => {
    if (TokenService.isAuthenticated()) {
      await wishlist.mutateAsync({ product_id: id });
    } else {
      onOpen();
    }
  };

  const addViewAction = useAddViewAction();
  useEffect(() => {
    if (wishData?.data && wishData?.data.length > 0) {
      setIsInWishList(wishData.data.some((item: any) => item.id === data.id));
    }
  }, [wishData, data.id]);
  const handleAddAction = async (id: string) => {
    await addViewAction.mutateAsync({ product_id: id });
  };

  if (!data) return null;
  return (
    <>
      <ModalLogin isOpen={isOpen} onClose={onClose} />
      {data && (
        <Link
          onClick={() => handleAddAction(data.id)}
          to={
            data?.subcategory
              ? `/product/${data?.category?.slug}/${data?.subcategory.slug}/${data.id}`
              : `/product/${data?.category?.slug}/${data.id}`
          }
        >
          <Card
            overflow={"hidden"}
            h={"auto"}
            w={"full"}
            shadow={"none"}
            borderRadius={0}
            role="group"
          >
            <CardHeader
              pos={"relative"}
              overflow={"hidden"}
              border={"1px solid #D2CFCF"}
              p={0}
            >
              <Stack
                opacity={{ base: 0, md: 1 }}
                zIndex={90}
                gap={2}
                pos={"absolute"}
                right={4}
                top={4}
              >
                <Flex
                  border={"1px solid #D2CFCF"}
                  borderRadius={"50%"}
                  bg={"#D9D9D9"}
                  _hover={{
                    bg: "#C6C6C6",
                  }}
                  justify={"center"}
                  align={"center"}
                  p={2}
                >
                  <Icon as={ShoppingBag} />
                </Flex>
                <Flex
                  border={"1px solid #D2CFCF"}
                  borderRadius={"50%"}
                  bg={"#D9D9D9"}
                  _hover={{
                    bg: "#C6C6C6",
                  }}
                  justify={"center"}
                  align={"center"}
                  p={2}
                  onClick={(e) => {
                    e.preventDefault();
                    handleWishList(data.id);
                  }}
                >
                  {wishlist.isPending ? (
                    <Spinner size={"xs"} />
                  ) : (
                    <Icon
                      as={Heart}
                      fill={isInWishList ? "red.500" : ""}
                      textColor={isInWishList ? "red.500" : ""}
                    />
                  )}
                </Flex>
              </Stack>
              {data.image ? (
                <Box
                  _groupHover={{
                    transition: "0.3s",
                    transform: "scale(1.1)",
                    zIndex: -1,
                  }}
                >
                  <LazyLoadImage
                    id={data.id}
                    src={data.image}
                    alt={data.id.toString()}
                    w={imageWidth ?? "full"}
                  />
                </Box>
              ) : (
                <Flex w={"full"} h={"full"} bg={"#D9D9D9"}>
                  <Image
                    w={"full"}
                    aspectRatio={1 / 1}
                    src={"https://bit.ly/naruto-sage"}
                    alt="naruto"
                    objectFit="cover"
                  />
                </Flex>
              )}
              <Flex
                pos={"absolute"}
                top={4}
                left={4}
                flexDir={"column"}
                w={"fit-content"}
                textColor={"white"}
                gap={2}
              >
                {data?.is_new && (
                  <Box
                    w={"fit-content"}
                    px={1}
                    bg={"primary.500"}
                    fontSize={"12px"}
                  >
                    New
                  </Box>
                )}
                {discountPercent! > 0 && (
                  <Box
                    w={"fit-content"}
                    px={1}
                    py={0.5}
                    bg={"red.400"}
                    fontSize={"12px"}
                  >
                    {discountPercent} %
                  </Box>
                )}
              </Flex>
            </CardHeader>
            <CardBody px={0}>
              <Text fontSize={"12px"} fontWeight={600} textColor={"#939292"}>
                {data.category?.name}
              </Text>
              <Stack mb={2}>
                <Text
                  noOfLines={1}
                  fontSize={{ base: "14px", sm: "16px", lg: "18px" }}
                  fontWeight={500}
                >
                  {data.name}
                </Text>
              </Stack>
              <HStack justify={"space-between"}>
                {colorOptions && (
                  <HStack spacing={"4px"}>
                    {colorOptions?.map((color: any, index: number) => (
                      <Box
                        key={index}
                        h={"14px"}
                        w={"14px"}
                        borderRadius={"50%"}
                        bg={color.hex_value}
                      />
                    ))}
                  </HStack>
                )}
              </HStack>
              <HStack spacing={"2px"}>
                <StarIcon boxSize={3} color={"#FFC700"} />
                <Text fontSize={"12px"} fontWeight={500} textColor={"#939292"}>
                  {/* {data.rating} ({data.ratingCount}) */}
                  {/* Hardcoded values */}
                  4.5 (200)
                </Text>
              </HStack>
              <HStack gap={2} mt={2}>
                {discountPercent && (
                  <Text
                    fontSize={{ base: "12px", sm: "14px", lg: "16px" }}
                    fontWeight={500}
                  >
                    Rs.{data.price * (1 - discountPercent / 100)}
                  </Text>
                )}
                <Text
                  fontSize={
                    discountPercent
                      ? { base: "10px", sm: "12px", lg: "14px" }
                      : { base: "12px", sm: "14px", lg: "16px" }
                  }
                  textColor={discountPercent ? "#939292" : ""}
                  textDecoration={discountPercent ? "line-through" : "none"}
                  fontWeight={discountPercent ? 400 : 500}
                >
                  Rs. {data.price}
                </Text>
              </HStack>
            </CardBody>
          </Card>
        </Link>
      )}
    </>
  );
};

export default ItemDisplay;
