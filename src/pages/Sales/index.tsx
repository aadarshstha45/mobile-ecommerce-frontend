import { useFetchSales } from "@/api/functions/Sales";
import ItemDisplay, { columnBreakpoints } from "@/components/ItemDisplay";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { Container, Flex, Heading } from "@chakra-ui/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const SalesOffer = () => {
  const { data, isPending } = useFetchSales();
  return (
    <Container
      as={"section"}
      id="special_offer"
      maxW={{ base: "98vw", md: "95vw", lg: "85vw" }}
      py={10}
    >
      {isPending ? (
        <LoadingSpinner />
      ) : (
        <Flex gap={10} flexDir={"column"}>
          {data &&
            data.length > 0 &&
            data.map((items: any, index: number) => (
              <Flex
                key={index}
                pb={4}
                borderBottom={
                  index === data.length - 1 ? "none" : "2px solid #D2CFCF"
                }
                flexDir={"column"}
                gap={4}
              >
                <Heading fontSize={{ base: "lg", md: "xl", xl: "2xl" }}>
                  {items?.title}
                </Heading>
                <ResponsiveMasonry columnsCountBreakPoints={columnBreakpoints}>
                  <Masonry gutter="30px">
                    {items.products
                      ?.filter((item: any) => item !== null)
                      .map((item: any, index: number) => (
                        <ItemDisplay
                          key={index}
                          data={item}
                          discountPercent={item?.discount ?? ""}
                          colorOptions={
                            item?.product_properties &&
                            item?.product_properties.color
                          }
                        />
                      ))}
                  </Masonry>
                </ResponsiveMasonry>
              </Flex>
            ))}
        </Flex>
      )}
    </Container>
  );
};

export default SalesOffer;
