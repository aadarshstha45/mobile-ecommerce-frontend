/* eslint-disable @typescript-eslint/no-explicit-any */
import IconButton from "@/components/Form/IconButton";
import RadioBox from "@/components/Form/RadioBox";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DetailTab from "./DetailTab";
import ProductFAQ from "./ProductFAQ";
import Queries from "./Queries";
import Ratings from "./Ratings";
import RelatedProducts from "./RelatedProducts/indext";
import { colorOptions, sizeOptions } from "./data/options";

function ProductDetail() {
  const [count, setCount] = useState<number>(1);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      size: "m",
      color: "",
      quantity: count,
    },
  });

  const onSubmit = (data: any) => {
    console.log({
      ...data,
      quantity: count,
    });
  };

  return (
    <Flex flexDir={"column"}>
      <Container
        maxW={{ base: "98vw", sm: "95vw", md: "90vw", lg: "85vw" }}
        id="product-detail"
        py={10}
      >
        <Flex flexDir={"column"} gap={10}>
          <Grid templateColumns={{ base: "1fr", md: "repeat(2,1fr)" }} gap={10}>
            <Flex alignContent={"center"} flexDir={"column"} gap={10}>
              <Image
                w={"full"}
                aspectRatio={4 / 3}
                src="https://via.placeholder.com/400"
              />

              <Flex gap={2} overflowX={"scroll"}>
                <Image src="https://via.placeholder.com/100" />
                <Image src="https://via.placeholder.com/100" />
                <Image src="https://via.placeholder.com/100" />
                <Image src="https://via.placeholder.com/100" />
                <Image src="https://via.placeholder.com/100" />
                <Image src="https://via.placeholder.com/100" />
              </Flex>
            </Flex>
            <Flex gap={10}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Flex flexDir={"column"}>
                  <Text fontSize={"xl"}>Product Name</Text>
                  <Text fontSize={"sm"}>
                    Product Category Product Category Product Category
                  </Text>

                  <Flex flexDir={"column"} mt={4} gap={2}>
                    <Text fontSize={"lg"}>Available Colors: </Text>

                    <RadioBox
                      options={colorOptions}
                      name="color"
                      bg={colorOptions[0].value + ".300"}
                      control={control}
                    />
                  </Flex>

                  <Divider
                    opacity={1}
                    borderColor={"primary.500"}
                    w={"full"}
                    my={4}
                  />

                  <Flex flexDir={"column"} mt={4} gap={2}>
                    <Text fontSize={"lg"}>Available Sizes: </Text>

                    <RadioBox
                      options={sizeOptions}
                      name="size"
                      control={control}
                    />
                  </Flex>

                  <Divider
                    opacity={1}
                    borderColor={"primary.500"}
                    w={"full"}
                    my={4}
                  />

                  <Flex flexDir={"column"} mt={4} gap={2}>
                    <Text fontSize={"lg"}>Quantity </Text>

                    <HStack gap={2}>
                      <IconButton
                        colorScheme="primary"
                        icon={<MinusIcon />}
                        borderRadius={0}
                        onClick={() => setCount(count - 1)}
                      />
                      <Text fontWeight={700} fontSize={"20px"}>
                        {count}
                      </Text>
                      <IconButton
                        colorScheme="primary"
                        icon={<AddIcon />}
                        borderRadius={0}
                        onClick={() => setCount(count + 1)}
                      />
                    </HStack>
                  </Flex>

                  <Divider
                    opacity={1}
                    borderColor={"primary.500"}
                    w={"full"}
                    my={4}
                  />
                </Flex>
                <Button type="submit">Add to Cart</Button>
              </form>
            </Flex>
          </Grid>
          <DetailTab />
          <Divider opacity={1} borderColor={"gray.300"} />
          <Ratings />
          <Divider
            alignSelf={"center"}
            borderColor={"gray.300"}
            opacity={1}
            w={{ base: "full", md: "70%" }}
          />
          <RelatedProducts />
        </Flex>
      </Container>
      <ProductFAQ />
      <Queries />
    </Flex>
  );
}

export default ProductDetail;
