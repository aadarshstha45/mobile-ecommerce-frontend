import NoImage from "@/assets/images/NoImage.png";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface OrderDisplayProps {
  data: any;
  isPending?: boolean;
}

const OrderDisplay = ({ data, isPending }: OrderDisplayProps) => {
  return (
    <>
      {isPending ? (
        <LoadingSpinner height={window.innerHeight / 2} />
      ) : data && data.length > 0 ? (
        data.map((item: any) => (
          <Card
            key={item.id}
            shadow={"none"}
            borderRadius={0}
            p={0}
            border={"1px solid"}
            borderColor={"#939292"}
            mb={4}
          >
            <CardHeader borderBottom={"1px solid"}>
              <Text fontSize={{ base: "sm", sm: "md", lg: "lg" }}>
                Order Id: #{item.order_number}
              </Text>
              <Text color={"#939292"} fontSize={{ base: "sm", md: "md" }}>
                Placed On: {item.order_date}
              </Text>
            </CardHeader>
            {item.order_items.map((product: any, index: number) => (
              <CardBody
                borderBottom={
                  index !== item.order_items.length - 1 ? "none" : "1px solid"
                }
                borderColor={"#939292"}
                key={product.id}
                as={Flex}
                flexWrap={{ base: "wrap", sm: "nowrap" }}
                justify={"space-between"}
                gap={4}
              >
                <HStack align={"start"} gap={4}>
                  <Link
                    to={
                      product.product?.sub_category
                        ? `/product/${product.product?.category.slug}/${product.product?.sub_category.slug}/${product.product?.id}`
                        : `/product/${product.product?.category.slug}/${product.product?.id}`
                    }
                  >
                    <Image
                      w={100}
                      aspectRatio={1 / 1}
                      src={product.product?.image ?? NoImage}
                      alt={product.product?.name}
                    />
                  </Link>
                  <Stack w={{ base: "200px", md: "400px" }} fontSize={"md"}>
                    <Text
                      mt={4}
                      fontWeight={500}
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      {product.product?.name}
                    </Text>
                    <HStack
                      flexWrap={{ base: "wrap", sm: "nowrap" }}
                      color={"#939292"}
                    >
                      {product.size && <Text>Size: {product.size.name}</Text>}
                      {product.color && (
                        <Text>Color: {product.color.name}</Text>
                      )}
                    </HStack>
                  </Stack>
                </HStack>
                <Text>X {product.quantity}</Text>
                <Text fontWeight={500} fontSize={"md"}>
                  Rs. {product.total}
                </Text>
              </CardBody>
            ))}
            <CardFooter gap={2} justify={"space-between"}>
              <HStack gap={2}>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  Total: Rs. {item.total_amount}
                </Text>
              </HStack>
              <HStack justify={"end"} flexWrap={"wrap"} align={"end"} gap={2}>
                <Text color={"#939292"} fontSize={"md"}>
                  Status: {item.payment_status}
                </Text>
                <Button colorScheme="primary" size="sm" borderRadius={0}>
                  Cancel
                </Button>
              </HStack>
            </CardFooter>
          </Card>
        ))
      ) : (
        <Text>No data found</Text>
      )}
    </>
  );
};

export default OrderDisplay;
