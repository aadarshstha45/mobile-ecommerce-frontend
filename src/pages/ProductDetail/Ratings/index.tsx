import { StarIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  GridItem,
  Heading,
  Progress,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";

const ratingsData = [
  {
    id: 1,
    rating: 5,
    total: 134,
  },
  {
    id: 2,
    rating: 4,
    total: 100,
  },
  {
    id: 3,
    rating: 3,
    total: 20,
  },
  {
    id: 4,
    rating: 2,
    total: 21,
  },
  {
    id: 5,
    rating: 1,
    total: 50,
  },
];

const Ratings = () => {
  return (
    <Flex justify={"center"} align={"center"} flexDir={"column"} gap={4}>
      <Heading color={"primary.500"} size={"lg"}>
        Ratings & Reviews
      </Heading>
      <SimpleGrid
        w={{ md: "70%" }}
        p={4}
        columns={{ base: 1, md: 2 }}
        spacing={4}
      >
        <GridItem colSpan={1} w={"full"} borderRight={{ md: "1px #e5e5e5" }}>
          <Flex flexDir={"column"} gap={2}>
            {ratingsData?.map((item) => (
              <Flex key={item.id} align={"center"} gap={2}>
                <Box textAlign={"center"} w={"30px"}>
                  <Text>{item.rating}</Text>
                </Box>
                <StarIcon color={"yellow.400"} />
                <Progress
                  w={200}
                  size={"sm"}
                  value={
                    item.rating === 5
                      ? 100
                      : item.rating === 4
                      ? 80
                      : item.rating === 3
                      ? 60
                      : item.rating === 2
                      ? 40
                      : 20
                  }
                  colorScheme="yellow"
                />
                <Text color={"gray.500"}>{item.total}</Text>
              </Flex>
            ))}
          </Flex>
        </GridItem>

        <GridItem colSpan={1} w={"full"}>
          <Flex
            flexDir={"column"}
            align={"center"}
            justify={"center"}
            gap={2}
            h={"full"}
          >
            <Flex align={"center"} justify={"center"} gap={2}>
              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight={600}>
                4.5
              </Text>
              <StarIcon color={"yellow.400"} />
            </Flex>
            <Text color={"gray.500"}>134 ratings</Text>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default Ratings;
