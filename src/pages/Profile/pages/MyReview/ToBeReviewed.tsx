import { useFetchToBeReviewed } from "@/api/functions/Review";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import {
  Button,
  Flex,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";

const ToBeReviewed = () => {
  const { data, isPending } = useFetchToBeReviewed();
  const [productId, setProductId] = useState<number | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = (id: number) => {
    setProductId(id);
    onOpen();
  };

  const handleClose = () => {
    setProductId(null);
    onClose();
  };

  return (
    <>
      <ReviewForm onClose={handleClose} isOpen={isOpen} productId={productId} />
      {isPending ? (
        <LoadingSpinner />
      ) : data && data.length > 0 ? (
        <TableContainer>
          <Table colorScheme="primary">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th></Th>
                <Th>Review</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data.map((order: any, index: number) => (
                <Tr key={index}>
                  <Td>
                    <Flex
                      gap={4}
                      as={Link}
                      to={
                        order.subcategory
                          ? `/products/${order.category?.slug}/${order.subcategory?.slug}/${order.id}`
                          : `/products/${order.category?.slug}/${order.id}`
                      }
                    >
                      <Image
                        src={order.image}
                        alt={order.name}
                        w={{ base: "100px", md: "150px" }}
                        aspectRatio={1 / 1}
                      />
                      <Text fontSize={{ base: "14px", md: "16px", lg: "18px" }}>
                        {order.name}
                      </Text>
                    </Flex>
                  </Td>
                  <Td></Td>
                  <Td>
                    <Button
                      onClick={() => handleOpen(order.id)}
                      variant={"outline"}
                    >
                      Review
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Text>No orders left to be reviewed</Text>
      )}
    </>
  );
};

export default ToBeReviewed;
