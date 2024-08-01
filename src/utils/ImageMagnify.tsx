/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Image } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

interface MagnifierProps {
  src: string;
  alt?: string;
  width?: any;
}

const Magnifier = ({ src, alt, width }: MagnifierProps) => {
  const [originX, setOriginX] = useState(0);
  const [originY, setOriginY] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleImageMagnify = (e: MouseEvent) => {
      const element = e.currentTarget as HTMLImageElement;
      const { top, left, width, height } = element.getBoundingClientRect();
      const offsetX = e.clientX - left;
      const offsetY = e.clientY - top;

      const originX = (offsetX / width) * 100;
      const originY = (offsetY / height) * 100;
      setOriginY(originY);
      setOriginX(originX);
    };

    const imgElement = imageRef.current;
    if (imgElement) {
      imgElement.addEventListener("mousemove", handleImageMagnify);
    }

    return () => {
      if (imgElement) {
        imgElement.removeEventListener("mousemove", handleImageMagnify);
      }
    };
  }, []);

  const handleMouseEnter = (e: any) => {
    const element = e.currentTarget as HTMLImageElement;
    element.style.setProperty("transform", "scale(1.5)");
  };

  const handleMouseLeave = (e: any) => {
    const element = e.currentTarget as HTMLImageElement;
    element.style.setProperty("transform", "scale(1)");
  };

  return (
    <Box overflow={"hidden"} w={width} position="relative">
      <Image
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        transformOrigin={`${originX}% ${originY}%`}
        ref={imageRef}
        loading="lazy"
        cursor={"zoom-in"}
        src={src}
        alt={alt}
        objectFit={"cover"}
        objectPosition={"center"}
        w={"full"}
        aspectRatio={1}
      />
    </Box>
  );
};

export default Magnifier;
