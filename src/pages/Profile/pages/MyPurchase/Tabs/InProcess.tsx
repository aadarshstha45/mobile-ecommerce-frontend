import NoImage from "@/assets/images/NoImage.png";
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
const InProcessData = [
  {
    id: 1,
    orderNo: "123456",
    date: "2021-10-10",
    product: {
      image: "https://via.placeholder.com/150",
      name: "Product Name",
      price: 100,
    },
    quantity: 1,
    size: {
      id: 1,
      name: "M",
      price: 200,
    },
    color: {
      id: 1,
      name: "Red",
      code: "#ff0000",
    },
    status: "In Process",
  },
  {
    id: 2,
    orderNo: "123456789",
    date: "2021-12-30",
    product: {
      image: NoImage,
      name: "Product Name 2",
      price: 1000,
    },
    quantity: 5,
    size: {
      id: 2,
      name: "XL",
      price: 400,
    },
    color: {
      id: 1,
      name: "Blue",
      code: "#0000ff",
    },
    status: "To Pay",
  },
];

const InProcess = () => {
  return (
    <>
      {InProcessData && InProcessData.length > 0 ? (
        InProcessData.map((data) => (
          <Card
            key={data.id}
            shadow={"none"}
            borderRadius={0}
            p={0}
            borderBottom={"1px solid"}
            borderColor={"#939292"}
            mb={4}
          >
            <CardHeader pb={0}>
              <Text fontSize={"xl"}>Order Id: {data.orderNo}</Text>
              <Text color={"#939292"} fontSize={"md"}>
                Placed On: {data.date}
              </Text>
            </CardHeader>
            <CardBody
              pt={2}
              as={Flex}
              flexWrap={{ base: "wrap", sm: "nowrap" }}
              justify={"space-between"}
              gap={4}
            >
              <HStack align={"start"} gap={4}>
                <Image
                  w={{ base: 150 }}
                  aspectRatio={1 / 1}
                  src={data.product.image}
                  alt={data.product.name}
                />
                <Stack fontSize={"md"}>
                  <Text mt={4} fontWeight={500} fontSize={"xl"}>
                    {data.product.name}
                  </Text>
                  <HStack
                    flexWrap={{ base: "wrap", sm: "nowrap" }}
                    color={"#939292"}
                  >
                    <Text>Size: {data.size.name}</Text>
                    <Text>Color: {data.color.name}</Text>
                  </HStack>
                </Stack>
              </HStack>
              <Text>X {data.quantity}</Text>
              <Text fontWeight={500} fontSize={"md"}>
                Rs. {data.product.price}
              </Text>
            </CardBody>
            <CardFooter pt={0} alignItems={"end"} gap={2} justify={"flex-end"}>
              <Text color={"#939292"} fontSize={"md"}>
                Status: {data.status}
              </Text>
              <Button colorScheme="primary" size="sm" borderRadius={0}>
                Cancel
              </Button>
            </CardFooter>
          </Card>
        ))
      ) : (
        <Text>No data found</Text>
      )}
    </>
  );
};

export default InProcess;
