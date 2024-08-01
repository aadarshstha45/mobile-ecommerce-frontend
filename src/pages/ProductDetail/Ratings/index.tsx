import { useFetchRatings } from "@/api/functions/Review";
import { LoadingSvg } from "@/assets/LoadingIcon";
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

interface RatingsProps {
  id: string | undefined;
}

const Ratings = ({ id }: RatingsProps) => {
  if (!id) return;
  const { data: ratingsData } = useFetchRatings(id);

  if (!ratingsData || ratingsData.data?.length == 0) {
    return <LoadingSvg p={10} />;
  }

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
            {Array(5)
              .fill(0)
              .map((_, index) => {
                const rating = 5 - index; // Start from 5 stars down to 1 star
                const ratingCount =
                  (ratingsData.data && ratingsData.data.ratings[rating]) || 0;
                return (
                  <Flex key={rating} align={"center"} gap={2}>
                    <Box textAlign={"center"} w={"30px"}>
                      <Text>{rating}</Text>
                    </Box>
                    <StarIcon color={"yellow.400"} />
                    <Progress
                      w={200}
                      size={"sm"}
                      value={
                        rating === 5
                          ? 100
                          : rating === 4
                          ? 80
                          : rating === 3
                          ? 60
                          : rating === 2
                          ? 40
                          : 20
                      }
                      colorScheme="yellow"
                    />
                    <Text color={"gray.500"}>{ratingCount}</Text>
                  </Flex>
                );
              })}
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
                {ratingsData?.data?.average_rating}
              </Text>
              <StarIcon color={"yellow.400"} />
            </Flex>
            <Text color={"gray.500"}>
              {ratingsData?.data?.total_reviews} review(s)
            </Text>
          </Flex>
        </GridItem>
      </SimpleGrid>
    </Flex>
  );
};

export default Ratings;
