import { useFetchReviewed } from "@/api/functions/Review";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import {
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Reviewed = () => {
  const { data, isPending } = useFetchReviewed();
  return isPending ? (
    <LoadingSpinner />
  ) : data && data.length > 0 ? (
    <TableContainer>
      <Table colorScheme="primary">
        <Thead>
          <Tr>
            <Th>Product</Th>
            <Th>Rating</Th>
            <Th>Review</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((review: any, index: number) => (
            <Tr key={index}>
              <Td>
                <Flex
                  gap={4}
                  as={Link}
                  to={
                    review.subcategory
                      ? `/products/${review.category?.slug}/${review.subcategory?.slug}/${review.id}`
                      : `/products/${review.category?.slug}/${review.id}`
                  }
                >
                  <Image
                    src={review.product.image}
                    alt={review.product.name}
                    boxSize="100px"
                    objectFit="cover"
                  />
                  <Text>{review.product.name}</Text>
                </Flex>
              </Td>
              <Td>{review.rating}</Td>
              <Td>{review.review}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  ) : (
    <Text>No reviews found</Text>
  );
};
export default Reviewed;
