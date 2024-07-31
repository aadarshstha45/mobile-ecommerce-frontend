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
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import ReviewForm from "./ReviewForm";

const ToBeReviewed = () => {
  const { data, isPending } = useFetchToBeReviewed();
  const [productId, setProductId] = useState<number | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = (id: number) => {
    setProductId(id);
    onOpen();
  };

  return (
    <>
      <ReviewForm onClose={onClose} isOpen={isOpen} productId={productId} />
      {isPending ? (
        <LoadingSpinner />
      ) : data && data.length > 0 ? (
        <TableContainer>
          <Table colorScheme="primary">
            <Tbody>
              {data.map((order: any, index: number) => (
                <Tr key={index}>
                  <Td>
                    <Flex gap={4}>
                      <Image
                        src={order.image}
                        alt={order.name}
                        w={"100px"}
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
