import { useFetchSliders } from "@/api/functions/Hero";
import { Box, Flex, Image } from "@chakra-ui/react";
import { lazy, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// import pages
const Sales = lazy(() => import("./Sales"));
const Customer = lazy(() => import("./Customer"));
const NewArrivals = lazy(() => import("./NewArrivals"));
const Categories = lazy(() => import("./Categories"));
const Discount = lazy(() => import("./Discount"));
// const HandPicked = lazy(() => import("./HandPicked"));
// const Instagram = lazy(() => import("./Instagram"));

const Home = () => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  const { data: sliderData } = useFetchSliders();

  return (
    <Flex maxW={"100vw"} overflow={"hidden"} flexDir={"column"} gap={10}>
      <Swiper
        className="hero-slider"
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        speed={3000}
        modules={[Autoplay]}
      >
        {sliderData?.map((data: any) => (
          <SwiperSlide key={data.id} className="hero-slide">
            {!loadedImages[data.id] && (
              <Box key={data.id} bg={"secondary.50"} w={"full"} h={"full"} />
            )}
            <Image
              src={data.image}
              alt={data.title}
              onLoad={() => handleImageLoad(data.id)} // Call handleImageLoad with ID when the image is loaded
              opacity={loadedImages[data.id] ? 1 : 0}
              objectFit={"cover"}
              objectPosition={"center"}
              transition={"opacity 0.3s ease-in-out"}
              w={"full"}
              aspectRatio={16 / 9}
            />
            {/* <Box position={"absolute"} right={{ base: 2, md: 20 }} bottom={10}> */}
            {/* <Stack gap={2}> */}
            {/* <Text
                  fontSize={{
                    base: "xs",
                    sm: "sm",
                    md: "md",
                    lg: "lg",
                    xl: "2xl",
                  }}
                  color={"white"}
                  fontWeight={600}
                >
                  {data.title}
                </Text>
                <Text
                  fontSize={{
                    base: "xs",
                    sm: "sm",
                    md: "md",
                    lg: "lg",
                    xl: "xl",
                  }}
                  fontWeight={500}
                  color={"white"}
                >
                  {data.subtitle}
                </Text> */}
            {/* <Button
                alignSelf={"center  "}
                w={"fit-content"}
                as={Link}
                to={data.url}
                bg={"white"}
                borderRadius={0}
                color={"gray.800"}
                _hover={{ bg: "gray.100" }}
                size={{ base: "xs", md: "lg" }}
              >
                Shop Now
              </Button> */}
            {/* </Stack> */}
            {/* </Box> */}
          </SwiperSlide>
        ))}
      </Swiper>

      <Sales />
      <Categories />
      <Customer />
      <NewArrivals />
      {/* <Wardrobe
        menWardrobeData={wardrobeData}
        womenWardrobeData={wardrobeData}
      /> */}
      <Discount />
      {/* <HandPicked data={handPickedData} /> */}
      {/* <Instagram /> */}
    </Flex>
  );
};

export default Home;
