import { Slider } from "@/components/Slider";
import { Box, Heading } from "@chakra-ui/react";

const RelatedProducts = () => {
  return (
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
        {/* <SwiperSlide className="swiper-items swiper-activities" key={data.id}>
          <ItemDisplay key={data.id} data={data} />
        </SwiperSlide> */}
      </Slider>
    </Box>
  );
};

export default RelatedProducts;
