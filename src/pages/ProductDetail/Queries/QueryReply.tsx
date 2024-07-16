import { useFetchProductQuery } from "@/api/functions/Query";
import { AnswerIcon, QuestionIcon } from "@/assets/icons/QandA";
import {
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import { CirclePlusIcon } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const QueryReply = () => {
  const { id } = useParams<{ id: string }>();
  const [perPage, setPerPage] = useState(3);
  const { data, isFetching } = useFetchProductQuery(id!, perPage);
  console.log(data);
  return (
    <Flex w={{ base: "100%", md: "60%" }} flexDir={"column"} gap={6}>
      <Heading fontWeight={"500"} size={"md"}>
        Product Related Questions ({data?.pagination.total})
      </Heading>
      {data?.data &&
        data?.data.length > 0 &&
        data.data.map((query: any) => (
          <Stack
            pb={4}
            borderBottom={"0.5px solid #898787"}
            key={query.id}
            align={"start"}
            gap={2}
            px={4}
            color={"#000"}
          >
            <Stack gap={0}>
              <HStack align={"center"} gap={4}>
                <Image src={QuestionIcon} boxSize={{ base: 4, md: 6 }} />
                <Text fontSize={"16px"}>{query.question}</Text>
              </HStack>
              <HStack ml={10} gap={2}>
                <Text color={"#939292"} fontSize={"12px"}>
                  {query.customer_name} - {query.questioned_at}
                </Text>
              </HStack>
            </Stack>
            {query.answer && (
              <Stack px={4} py={2} gap={0}>
                <HStack align={"center"} gap={4}>
                  <Image src={AnswerIcon} boxSize={{ base: 4, md: 6 }} />
                  <Text fontSize={"16px"}>{query.answer}</Text>
                </HStack>
                <HStack ml={10} gap={2}>
                  <Text color={"#939292"} fontSize={"12px"}>
                    admin - {query.answered_at}
                  </Text>
                </HStack>
              </Stack>
            )}
          </Stack>
        ))}
      {data?.pagination.last_page > 1 && (
        <Stack justify={"center"} align={"center"} gap={4}>
          <Tooltip label={"Load More"} fontSize={"sm"}>
            <Button
              variant={"unset"}
              isLoading={isFetching}
              onClick={() => setPerPage(perPage + 3)}
            >
              <CirclePlusIcon color="#4A57B3" size={24} />
            </Button>
          </Tooltip>
        </Stack>
      )}
    </Flex>
  );
};

export default QueryReply;
