import { ArrowForward } from "@/assets/icons/ArrowForward";
import DiscountImage from "@/assets/images/DiscountImage.png";
import DiscountBanner from "@/assets/images/HomeBanner/Discount.png";
import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Image,
  SimpleGrid,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Discount() {
  const [isLessThan1275] = useMediaQuery("(max-width: 1275px)");

  return (
    <Box pos={"relative"} bgSize={"cover"} bgImage={`url(${DiscountBanner})`}>
      <Container
        maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
        pt={8}
        h={isLessThan1275 ? "full" : 400}
      >
        <SimpleGrid columns={isLessThan1275 ? 1 : 2}>
          <GridItem colSpan={1} w={"80%"}>
            <Flex flexDir={"column"} gap={4}>
              <Text
                fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}
                fontWeight={600}
                textColor={"#002BC6"}
              >
                Flat 20% Off
              </Text>
              <Text
                fontSize={{ base: "20px", sm: "22px", md: "26px", lg: "28px" }}
                fontWeight={600}
                textColor={"#000"}
              >
                Beat the Heat this summer
              </Text>
              <Text
                fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}
              >
                Buy a hat that protects your skin from the UV rays and other
                harmful rays that comes off from almighty sun.
              </Text>
              <Button
                as={Link}
                to={"/shop"}
                w={"fit-content"}
                borderRadius={0}
                bg={"#FFF852"}
                _hover={{ bg: "#F0E63C" }}
                textColor={"primary.500"}
                rightIcon={<ArrowForward fill={"#4A57B3"} />}
              >
                Shop Now
              </Button>
            </Flex>
          </GridItem>
          <GridItem colSpan={1} w={isLessThan1275 ? "100%" : "80%"}>
            <Image
              src={DiscountImage}
              alt={"Discount"}
              pos={isLessThan1275 ? "static" : "absolute"}
              top={"38px"}
              right={0}
            />
          </GridItem>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Discount;
