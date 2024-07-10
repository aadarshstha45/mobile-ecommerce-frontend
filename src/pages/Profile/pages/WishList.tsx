import NoImage from "@/assets/images/NoImage.png";
import {
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { EyeIcon } from "lucide-react";
const WishList = () => {
  return (
    <Flex w={"full"} flexDir={"column"} gap={4}>
      <Text fontSize={"xl"}>My WishList</Text>
      <Card border={"1px solid"} borderRadius={0} p={0} shadow={"none"}>
        <CardBody
          flexWrap={"wrap"}
          p={4}
          gap={4}
          as={Flex}
          justify={{ base: "end", md: "space-between" }}
          align={"center"}
        >
          <HStack align={"start"} spacing={4} w={{ base: "full", md: "60%" }}>
            <Image src={NoImage} alt="No Image" w={100} aspectRatio={1 / 1} />
            <Text>WishList</Text>
          </HStack>
          <Text size={"md"}>Rs. 200</Text>
          <HStack>
            <Button borderRadius={2} colorScheme="primary" py={0} size="md">
              <Icon as={EyeIcon} boxSize={6} />
            </Button>
          </HStack>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default WishList;
