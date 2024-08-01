import { LoadingSpinner } from "@/utils/LoadingSpinner";
import {
  Card,
  CardHeader,
  Link as ChakraLink,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

interface OrderDisplayProps {
  data: any;
  isPending?: boolean;
}

const OrderDisplay = ({ data, isPending }: OrderDisplayProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  const handleOrderOpen = (item: any) => {
    console.log(item);
    onOpen();
    setSelectedOrder(item);
  };

  const handleOrderClose = () => {
    setSelectedOrder(null);
    onClose();
  };

  return (
    <>
      {isPending ? (
        <LoadingSpinner height={window.innerHeight / 2} />
      ) : data && data.length > 0 ? (
        data.map((item: any) => (
          <Card
            cursor={"pointer"}
            zIndex={0}
            key={item.id}
            shadow={"none"}
            borderRadius={0}
            p={0}
            border={"1px solid"}
            borderColor={"#939292"}
            mb={4}
            onClick={() => handleOrderOpen(item)}
          >
            <CardHeader
              as={Flex}
              justify={"space-between"}
              align={"center"}
              flexWrap={"wrap"}
              gap={6}
            >
              <Stack>
                <Text fontSize={{ base: "sm", md: "md" }}>
                  Order Id: #{item.order_number}
                </Text>
                <Text
                  fontSize={{ base: "14px", md: "16px", lg: "18px" }}
                  color={"#939292"}
                >
                  Placed On: {item.order_date}
                </Text>
              </Stack>
              <Stack align={"center"} gap={2}>
                <Text fontSize={{ base: "16px", md: "18px", lg: "20px" }}>
                  Rs. {item.total_amount}
                </Text>
              </Stack>
            </CardHeader>
          </Card>
        ))
      ) : (
        <Text>No data found</Text>
      )}
      {selectedOrder && (
        <Modal
          isOpen={isOpen}
          onClose={handleOrderClose}
          motionPreset="slideInTop"
        >
          <ModalOverlay />
          <ModalContent
            px={1}
            as={Container}
            maxW={{ base: "98vw", lg: "fit-content" }}
          >
            <ModalCloseButton />

            <ModalHeader>Order Id: #{selectedOrder.order_number}</ModalHeader>
            <ModalBody>
              <TableContainer>
                <Table>
                  <Thead>
                    <Tr>
                      <Th>S.N.</Th>
                      <Th>Product Name</Th>
                      <Th>Quantity</Th>
                      <Th>Price</Th>
                      <Th>Discount</Th>
                      <Th>Amount</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {selectedOrder.order_items.map(
                      (order: any, index: number) => (
                        <Tr key={index}>
                          <Td>{index + 1}</Td>

                          <Td>
                            <ChakraLink
                              as={Link}
                              to={
                                order.product.subcategory
                                  ? `/product/${order.product.category?.slug}/${order.product.subcategory.slug}/${order.product.id}`
                                  : `/product/${order.product.category?.slug}/${order.product.id}`
                              }
                            >
                              {order.product.name}
                            </ChakraLink>
                          </Td>

                          <Td>{order.quantity}</Td>
                          <Td>Rs. {order.price}</Td>
                          <Td>Rs. {order.discount ?? 0}</Td>
                          <Td>Rs. {order.total}</Td>
                        </Tr>
                      )
                    )}
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Td colSpan={3}></Td>
                      <Td>Discount</Td>
                      <Td>Rs. {selectedOrder.discount_amount ?? 0}</Td>
                      <Td></Td>
                    </Tr>
                    <Tr>
                      <Td colSpan={3}></Td>
                      <Td>Grand Total</Td>
                      <Td></Td>
                      <Td>Rs. {selectedOrder.total_amount}</Td>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default OrderDisplay;
