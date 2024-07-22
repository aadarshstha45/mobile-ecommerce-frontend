import { useFetchRelatedProducts } from "@/api/functions/Product";
import ItemDisplay from "@/components/ItemDisplay";
import { Slider } from "@/components/Slider";
import { Box, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { SwiperSlide } from "swiper/react";

const RelatedProducts = () => {
  const { id } = useParams<{ id: string }>();
  if (!id) return null;
  console.log("Related Products ID", id);
  const { data } = useFetchRelatedProducts(id);
  console.log("Related Products", data);
  return (
    data &&
    data.length > 0 && (
      <Box width={"full"}>
        <Heading textAlign="center" color={"primary.500"} size={"lg"}>
          Related Products
        </Heading>
        <Slider
          noOfSlides={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          loop
          speed={3000}
          space={20}
        >
          {data.map((item: any) => (
            <SwiperSlide
              className="swiper-items swiper-activities"
              key={item.id}
            >
              <ItemDisplay data={item} />
            </SwiperSlide>
          ))}
        </Slider>
      </Box>
    )
  );
};

export default RelatedProducts;
