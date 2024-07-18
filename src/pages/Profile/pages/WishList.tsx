import { useDeleteWishlist, useFetchWishlist } from "@/api/functions/Wishlist";
import NoImage from "@/assets/images/NoImage.png";
import DeleteAlert from "@/components/Form/DeleteAlert";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Icon,
  Image,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { CirclePlusIcon, EyeIcon, Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
const WishList = () => {
  const [perPage, setPerPage] = useState(5);
  const { data, isPending, isFetching } = useFetchWishlist(perPage);
  const [id, setId] = useState<string | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteWishlist = useDeleteWishlist();

  const handleDeleteOpen = (id: string) => {
    setId(id);
    onOpen();
  };

  const handleDeleteWishList = async () => {
    if (!id) return;
    await deleteWishlist.mutateAsync(id);
    setId(null);
    onClose();
  };
  return (
    <Flex flexDir={"column"} gap={4}>
      <Text fontSize={"xl"}>My WishList</Text>
      {isPending ? (
        <LoadingSpinner height={window.innerHeight / 2} />
      ) : data.data && data.data.length > 0 ? (
        <Flex justify={"start"} align={"start"} flexDir={"column"} gap={4}>
          {data.data.map((item: any) => (
            <Card
              w={{ base: "full", lg: "60%" }}
              key={item.id}
              border={"1px solid"}
              borderRadius={0}
              p={0}
              shadow={"none"}
            >
              <CardBody
                flexWrap={"wrap"}
                p={4}
                gap={4}
                as={Flex}
                justify={{ base: "end", md: "space-between" }}
                align={"center"}
              >
                <HStack
                  align={"start"}
                  spacing={4}
                  w={{ base: "full", md: "60%" }}
                >
                  <Image
                    src={item.image ?? NoImage}
                    alt="No Image"
                    w={"100px"}
                    objectFit={"cover"}
                    objectPosition={"center"}
                    aspectRatio={1 / 1}
                  />
                  <Stack gap={0}>
                    <Text fontSize={{ base: "14px", md: "20px" }}>
                      {item.name}
                    </Text>
                    <Text
                      textColor={"gray.500"}
                      fontSize={{ base: "12px", md: "16px" }}
                    >
                      {item.category?.name}
                    </Text>
                  </Stack>
                </HStack>
                <Text size={"md"}>Rs. {item?.price}</Text>
                <HStack>
                  <Button
                    as={Link}
                    to={
                      item?.subcategory
                        ? `/product/${item.category.slug}/${item.subcategory.slug}/${item.id}`
                        : `/product/${item.category.slug}/${item.id}`
                    }
                    borderRadius={2}
                    size="xs"
                  >
                    <Icon as={EyeIcon} />
                  </Button>
                  <Button
                    onClick={() => handleDeleteOpen(item.id)}
                    colorScheme="red"
                    borderRadius={2}
                    size="xs"
                  >
                    <Icon as={Trash2Icon} cursor={"pointer"} />
                  </Button>
                </HStack>
              </CardBody>
            </Card>
          ))}
        </Flex>
      ) : (
        <Text
          textAlign={"center"}
          fontSize={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
          fontWeight={500}
        >
          No items in your wishlist
        </Text>
      )}
      {data?.pagination?.total_pages > 1 && (
        <Stack
          w={{ base: "full", lg: "60%" }}
          align={"center"}
          mr={10}
          justify={"center"}
        >
          {isFetching ? (
            <Spinner thickness="4px" color="primary.500" />
          ) : (
            <Button
              variant={"unstyled"}
              w={"fit-content"}
              colorScheme="primary"
              onClick={() => setPerPage(perPage + 5)}
            >
              <Icon
                _hover={{ color: "primary.600" }}
                color={"primary.500"}
                as={CirclePlusIcon}
                boxSize={6}
              />
            </Button>
          )}
        </Stack>
      )}

      <DeleteAlert
        isOpen={isOpen}
        onClose={onClose}
        heading="Delete Wishlist?"
        message="Are you sure you want to delete this wishlist?"
        onDelete={handleDeleteWishList}
        isDeleting={deleteWishlist.isPending}
      />
    </Flex>
  );
};

export default WishList;
