import {
  Button,
  Container,
  Flex,
  HStack,
  Icon,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { CheckCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const ThankYou = () => {
  const data = useLocation().state;


  if (!data) {
    return (
      <Flex justify={"center"} align={"center"} minH={window.innerHeight / 1.5}>
        <Text fontSize={{ base: "20px", md: "22px", xl: "24px" }}>
          No order found!
        </Text>
      </Flex>
    );
  }

  return (
    <Container maxW={{ base: "98vw", md: "90vw", xl: "80vw" }} py={10}>
      <Flex justify={"center"} align={"center"} minH={window.innerHeight / 1.5}>
        <Flex flexDir={"column"} gap={2} align={"center"} w={"full"}>
          <Flex
            w={12}
            h={12}
            bg={"primary.200"}
            rounded={"full"}
            justify={"center"}
            align={"center"}
          >
            <Icon as={CheckCheck} w={10} h={10} color={"white"} />
          </Flex>

          <Text
            fontSize={{ base: "20px", md: "22px", xl: "24px" }}
            fontWeight={600}
          >
            Thank you for your purchase!
          </Text>
          <Text fontSize={{ base: "16px", md: "18px", xl: "20px" }}>
            Your order details:
          </Text>
          <TableContainer mt={-2}>
            <Table>
              <TableCaption
                fontSize={{ base: "16px", md: "18px", xl: "20px" }}
                textAlign={"left"}
                placement="top"
                px={0}
                color={"#000"}
              >
                Order Number: #{data.data.order_number}
              </TableCaption>
              <Thead>
                <Tr bg={"gray.50"}>
                  <Th>S.N.</Th>
                  <Th>Product Name</Th>
                  <Th>Quantity</Th>
                  <Th>Price</Th>
                  <Th>Discount</Th>
                  <Th>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.products.map((product: any, index: number) => (
                  <Tr key={index}>
                    <Td>{index + 1}</Td>

                    <Td>{product.product_name}</Td>

                    <Td>{product.quantity}</Td>
                    <Td>Rs. {product.price}</Td>
                    <Td>Rs. {product.discount ?? 0}</Td>
                    <Td>Rs. {product.total}</Td>
                  </Tr>
                ))}
              </Tbody>
              <Tfoot>
                <Tr>
                  <Td colSpan={3}></Td>
                  <Td>Discount</Td>
                  <Td>Rs. {data.data.discount_amount ?? 0}</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td colSpan={3}></Td>
                  <Td>Grand Total</Td>
                  <Td></Td>
                  <Td>Rs. {data.data.total_amount}</Td>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          <HStack mt={4}>
            <Button as={Link} to={"/shop"} size={"sm"} colorScheme={"primary"}>
              Shop More
            </Button>
            <Button
              as={Link}
              to={"/profile/my-orders"}
              size={"sm"}
              colorScheme={"primary"}
            >
              View Order
            </Button>
          </HStack>
        </Flex>
      </Flex>
    </Container>
  );
};

export default ThankYou;
