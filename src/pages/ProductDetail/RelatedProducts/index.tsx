import { useFetchRelatedProducts } from "@/api/functions/Product";
import ItemDisplay from "@/components/ItemDisplay";
import { Slider } from "@/components/Slider";
import { Box, Container, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

const RelatedProducts = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;
  const { data } = useFetchRelatedProducts(id);
  return (
    <Container
      maxW={{ base: "full", sm: "95vw", md: "90vw", xl: "85vw" }}
      py={10}
    >
      {data && data.length > 0 && (
        <Box width={"full"}>
          <Heading textAlign="center" color={"primary.500"} size={"lg"}>
            Related Products
          </Heading>
          <Slider
            noOfSlides={4}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1180: {
                slidesPerView: 4,
              },
              1440: {
                slidesPerView: 5,
              },
            }}
            loop
            speed={3000}
            space={5}
          >
            {data.map((item: any) => (
              <SwiperSlide
                className="swiper-items swiper-activities"
                key={item.id}
              >
                <ItemDisplay data={item} imageWidth="300px" />
              </SwiperSlide>
            ))}
          </Slider>
        </Box>
      )}
    </Container>
  );
};

export default RelatedProducts;
