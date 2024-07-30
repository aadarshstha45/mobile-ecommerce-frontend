/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Image } from "@chakra-ui/react";
import { useState } from "react";

import { Blurhash } from "react-blurhash";

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
    setLoadedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <>
      {!loadedImages[id] && placeholder ? (
        <Blurhash
          hash={placeholder}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
          style={{
            filter: loadedImages[id] ? "blur(10px)" : "none",
            transition: "filter 0.5s ease-in-out",
          }}
        />
      ) : (
        <Box width="full" height="full" bg={"primary.100"} />
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
