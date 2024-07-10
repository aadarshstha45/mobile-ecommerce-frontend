import { AddCartIcon, AddWishListIcon } from "@/assets/icons/CartIcon";
import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import LazyLoadImage from "../Image";

interface ItemDisplayProps {
  data: any;
  colorOptions?: any;
}

const ItemDisplay = ({ data, colorOptions }: ItemDisplayProps) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Link
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
      >
        <CardHeader
          pos={"relative"}
          overflow={"hidden"}
          border={"1px solid #D2CFCF"}
          p={0}
        >
          <Stack gap={2} pos={"absolute"} right={4} top={4}>
            <Box
              border={"1px solid #D2CFCF"}
              borderRadius={"50%"}
              p={1}
              bg={"#D9D9D9"}
              _hover={{
                bg: "#C6C6C6",
                textColor: "white",
              }}
            >
              <AddCartIcon _hover={{ textColor: "white" }} boxSize={6} />
            </Box>
            <Box
              border={"1px solid #D2CFCF"}
              borderRadius={"50%"}
              p={1}
              bg={"#D9D9D9"}
              _hover={{
                bg: "#C6C6C6",
                textColor: "white",
              }}
            >
              <AddWishListIcon _hover={{ fill: "white" }} boxSize={6} />
            </Box>
          </Stack>
          {data.image ? (
            <Box>
              <LazyLoadImage
                id={data.id}
                src={data.image}
                alt={data.id.toString()}
                h={"400px"}
                w={"full"}
              />
            </Box>
          ) : (
            <Flex
              justify={"center"}
              align={"center"}
              h={"400px"}
              w={"full"}
              bgColor={"#D9D9D9"}
            >
              No Image
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
            <Box w={"fit-content"} px={1} bg={"#FB4C51"} fontSize={"12px"}>
              Sold Out
            </Box>
            <Box w={"fit-content"} px={1} bg={"primary.500"} fontSize={"12px"}>
              New
            </Box>
            <Box
              w={"fit-content"}
              px={1}
              bg={"#D2CFCF"}
              textColor={"primary.500"}
              fontSize={"12px"}
            >
              -40%
            </Box>
          </Flex>
        </CardHeader>
        <CardBody px={0}>
          <Text fontSize={"13px"} fontWeight={600} textColor={"#939292"}>
            {data.category?.name}
          </Text>
          <HStack justify={"space-between"} align={"center"}>
            <Text fontSize={"16px"} fontWeight={500}>
              {data.name}
            </Text>
            <HStack spacing={"2px"}>
              {...Array(5)
                .fill(0)
                .map((_, index) => (
                  <StarIcon
                    key={index}
                    boxSize={3}
                    color={
                      index < Math.floor(data.averageRating)
                        ? "#FFC700"
                        : "#FFC700"
                    }
                  />
                ))}
            </HStack>
          </HStack>
          <HStack justify={"space-between"} align={"center"}>
            <HStack spacing={"4px"}>
              {colorOptions &&
                colorOptions?.map((color: any, index: number) => (
                  <Box
                    key={index}
                    h={"14px"}
                    w={"14px"}
                    borderRadius={"50%"}
                    bg={color.option}
                  />
                ))}
            </HStack>
            <HStack spacing={"2px"}>
              <Text
                fontSize={data.discountedPrice ? "13px" : "16px"}
                fontWeight={500}
                textColor={data.discountedPrice ? "#939292" : ""}
                textDecoration={data.discountedPrice ? "line-through" : "none"}
              >
                ${data.price}
              </Text>
              {data.discountedPrice && (
                <Text fontSize={"16px"} fontWeight={600}>
                  ${data.discountedPrice}
                </Text>
              )}
            </HStack>
          </HStack>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ItemDisplay;
