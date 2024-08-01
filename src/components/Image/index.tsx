/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingSvg } from "@/assets/LoadingIcon";
import { AspectRatio, Box, Image } from "@chakra-ui/react";
import { useState } from "react";
interface LazyLoadImageProps {
  id: number;
  src: string;
  alt?: string;
  placeholder?: any;
  w?: any;
  h?: any;
  [x: string]: any;
}

const LazyLoadImage = ({
  id,
  src,
  alt,
  placeholder,
  w,
  h,
  ...rest
}: LazyLoadImageProps) => {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const handleImageLoad = (id: number) => {
    console.log("Image loaded", id);
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      {!loadedImages[id] && (
        <AspectRatio
          pos={"absolute"}
          left={0}
          top={0}
          w={"100%"}
          h={"100%"}
          ratio={[1]}
        >
          <LoadingSvg p={20} />
        </AspectRatio>
      )}
      <Image
        src={src}
        alt={alt}
        loading="lazy"
        fallback={<Box width="full" height="full" bg={"primary.100"} />}
        objectFit={"cover"}
        onLoad={() => handleImageLoad(id)} // Call handleImageLoad with ID when the image is loaded
        opacity={loadedImages[id] ? 1 : 0}
        transition={"opacity 0.3s ease-in-out"}
        w={w ?? "full"}
        // h={h}
        aspectRatio={1 / 1}
        objectPosition={"center"}
        {...rest}
      />
    </>
  );
};

export default LazyLoadImage;
