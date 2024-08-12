import {
  Box,
  Image,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

interface MagnifierProps {
  src: string;
  alt?: string;
  width?: any;
}

const Magnify = ({ src, alt, width }: MagnifierProps) => {
  const [originX, setOriginX] = useState(50);
  const [originY, setOriginY] = useState(50);
  const imageRef = useRef<HTMLImageElement>(null);

  const handleImageMagnify = (
    e: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    const element = e.currentTarget as HTMLImageElement;
    const { top, left, width, height } = element.getBoundingClientRect();
    const offsetX = e.clientX - left;
    const offsetY = e.clientY - top;

    const originX = (offsetX / width) * 100;
    const originY = (offsetY / height) * 100;
    setOriginY(originY);
    setOriginX(originX);
  };

  return (
    <Popover trigger="hover" placement="right">
      <PopoverTrigger>
        <Box overflow={"hidden"} w={width} position="relative">
          <Image
            ref={imageRef}
            loading="lazy"
            cursor={"zoom-in"}
            src={src}
            alt={alt}
            objectFit={"cover"}
            objectPosition={"top"}
            w={"full"}
            aspectRatio={1}
            onMouseMove={handleImageMagnify}
          />
        </Box>
      </PopoverTrigger>
      <PopoverContent
        display={{ base: "none", sm: "block" }}
        borderRadius={0}
        w={{ sm: "300px", md: "430px", xl: "500px" }}
        h={{ sm: "300px", md: "430px", xl: "500px" }}
        aspectRatio={1}
        overflow="hidden"
      >
        <Box position="relative" width="100%" height="100%" overflow="hidden">
          <Image
            transform={`scale(2)`}
            transformOrigin={`${originX}% ${originY}%`}
            loading="lazy"
            cursor={"zoom-in"}
            src={src}
            alt={alt}
            objectFit={"cover"}
            objectPosition={"center"}
            w={"full"}
            h={"full"} // Ensures height is set to match the width
            style={{ pointerEvents: "none" }} // Ensures no interaction with the image in the popover
          />
        </Box>
      </PopoverContent>
    </Popover>
  );
};

export default Magnify;
