import { useFetchProductByQuery } from "@/api/functions/Product";
import ItemDisplay, { columnBreakpoints } from "@/components/ItemDisplay";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { Container, Flex, useMediaQuery } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useParams } from "react-router-dom";

const Search = () => {
  const { query } = useParams<{ query: string }>();
  if (!query) return <div>Search</div>;
  const { data, isPending } = useFetchProductByQuery(query);

  const [isLessThan540] = useMediaQuery("(max-width: 540px)");

  return (
    <Container
      as={"section"}
      id="collection"
      maxW={{ base: "98vw", md: "95vw" }}
      py={10}
    >
      {isPending ? (
        <LoadingSpinner />
      ) : (
        <Flex flexDir={"column"} gap={4} w={"full"}>
          {data.length > 0 ? (
            <ResponsiveMasonry columnsCountBreakPoints={columnBreakpoints}>
              <Masonry gutter={isLessThan540 ? "10px" : "20px"}>
                {data?.map((item: any, index: number) => (
                  <ItemDisplay
                    key={index}
                    data={item}
                    discountPercent={item?.discount}
                    colorOptions={
                      item?.product_properties && item.product_properties
                    }
                  />
                ))}
              </Masonry>
            </ResponsiveMasonry>
          ) : (
            <Flex justify={"center"} align={"center"} h={"50vh"}>
              No products found
            </Flex>
          )}
        </Flex>
      )}
    </Container>
  );
};

export default Search;
