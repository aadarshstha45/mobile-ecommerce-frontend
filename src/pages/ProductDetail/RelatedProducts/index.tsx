import ItemDisplay from "@/components/ItemDisplay";
import { Slider } from "@/components/Slider";
import { handPickedData } from "@/pages/Home/data/data";
import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";

const RelatedProducts = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
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
        {handPickedData?.slice(0, 6).map((data) => (
          <SwiperSlide className="swiper-items swiper-activities" key={data.id}>
            <ItemDisplay
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
              key={data.id}
              data={data}
            />
          </SwiperSlide>
        ))}
      </Slider>
    </Box>
  );
};

export default RelatedProducts;
