import Image1 from "@/assets/images/HomeBanner/Image1.png";
import Image2 from "@/assets/images/HomeBanner/Image2.png";
import { Box, Flex, Image } from "@chakra-ui/react";
import { lazy, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { salesData } from "./data";
import { handPickedData } from "./data/data";
import { wardrobeData } from "./data/wardrobeData";

// import pages
const Sales = lazy(() => import("./Sales"));
const Customer = lazy(() => import("./Customer"));
const NewArrivals = lazy(() => import("./NewArrivals"));
const Wardrobe = lazy(() => import("./Wardrobe"));
const Discount = lazy(() => import("./Discount"));
const HandPicked = lazy(() => import("./HandPicked"));
// const Instagram = lazy(() => import("./Instagram"));

const sliderData = [
  { id: 1, src: Image1, alt: "Image1" },
  { id: 2, src: Image2, alt: "Image2" },
  { id: 3, src: Image1, alt: "Image3" },
  { id: 4, src: Image2, alt: "Image4" },
];

const Home = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };
  return (
    <Flex
      maxW={"100vw"}
      overflow={"hidden"}
      flexDir={"column"}
      gap={10}
      pb={20}
    >
      <Swiper
        className="hero-slider"
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000 }}
        speed={4000}
        modules={[Autoplay]}
      >
        {sliderData?.map((data) => (
          <SwiperSlide key={data.id} className="hero-slide">
            {!loadedImages[data.id] && (
              <Box key={data.id} bg={"secondary.50"} w={"full"} h={"full"} />
            )}
            <Image
              src={data.src}
              alt={data.alt}
              onLoad={() => handleImageLoad(data.id)} // Call handleImageLoad with ID when the image is loaded
              opacity={loadedImages[data.id] ? 1 : 0}
              objectFit={"cover"}
              objectPosition={"center"}
              transition={"opacity 0.3s ease-in-out"}
              w={"full"}
              h={{
                base: "300px",
                sm: "400px",
                md: "500px",
                lg: "600px",
                xl: "700px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Sales salesData={salesData} />
      <Customer />
      <NewArrivals />
      <Wardrobe
        menWardrobeData={wardrobeData}
        womenWardrobeData={wardrobeData}
      />
      <Discount />
      <HandPicked data={handPickedData} />
      {/* <Instagram /> */}
    </Flex>
  );
};

export default Home;
