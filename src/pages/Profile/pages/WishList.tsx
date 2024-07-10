import { useFetchWishlist } from "@/api/functions/Wishlist";
import NoImage from "@/assets/images/NoImage.png";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { EyeIcon } from "lucide-react";
import { Link } from "react-router-dom";
const WishList = () => {
  const { data, isPending } = useFetchWishlist();
  return (
    <Flex w={"full"} flexDir={"column"} gap={4}>
      <Text fontSize={"xl"}>My WishList</Text>
      {isPending ? (
        <LoadingSpinner height={window.innerHeight / 2} />
      ) : data?.length > 0 ? (
        data.map((item: any) => (
          <Card
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
                  w={100}
                  aspectRatio={1 / 1}
                />
                <Text>{item.name}</Text>
              </HStack>
              <Text size={"md"}>Rs. 200</Text>
              <HStack>
                <Button
                  as={Link}
                  to={
                    item?.subcategory
                      ? `/product/${item.category.slug}/${item.subcategory.slug}/${item.id}`
                      : `/product/${item.category.slug}/${item.id}`
                  }
                  borderRadius={2}
                  colorScheme="primary"
                  py={0}
                  size="sm"
                >
                  <Icon as={EyeIcon} boxSize={5} />
                </Button>
              </HStack>
            </CardBody>
          </Card>
        ))
      ) : (
        <Text
          textAlign={"center"}
          fontSize={{ base: "sm", md: "md", lg: "lg", xl: "xl" }}
          fontWeight={500}
        >
          No items in your wishlist
        </Text>
      )}
    </Flex>
  );
};

export default WishList;
