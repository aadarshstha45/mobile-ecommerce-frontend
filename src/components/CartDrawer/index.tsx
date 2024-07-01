import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import Jean from "@/assets/images/NewArrivals/jean1.png";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const [quantity, setQuantity] = useState(1);
  const { handleSubmit } = useForm();
  return (
    <Drawer isOpen={isOpen} onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth={"1px"}>My Cart</DrawerHeader>
        <DrawerBody
          as={"form"}
          id="cart-form"
          onSubmit={handleSubmit(() => {
            console.log("submitting");
          })}
        >
          <Flex p={4} align={"center"} justify={"space-between"} gap={2}>
            <Image
              borderRadius={"lg"}
              h={"100px"}
              w={"100px"}
              src={Jean}
              objectFit={"cover"}
              objectPosition={"center"}
              loading="lazy"
              alt="Jean"
            />
            <Stack ml={3} w={"80%"}>
              <Text fontWeight={"bold"} fontSize={"lg"}>
                Jean
              </Text>
              <HStack flexWrap={"wrap"}>
                <Text>Size: S </Text>
                <Text>Color: Red </Text>
              </HStack>
              <HStack gap={2}>
                <IconButton
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                    }
                  }}
                  colorScheme="primary"
                  borderRadius={0}
                  aria-label="Decrease quantity"
                  icon={<MinusIcon />}
                  size={"xs"}
                />
                <Input
                  onChange={(e) => {
                    setQuantity(Number(e.target.value));
                  }}
                  name="quantity"
                  value={quantity}
                />
                <IconButton
                  aria-label="Increase quantity"
                  onClick={() => {
                    setQuantity(quantity + 1);
                  }}
                  icon={<PlusIcon />}
                  colorScheme="primary"
                  borderRadius={0}
                  size={"xs"}
                />
              </HStack>
            </Stack>

            <Icon w={"5%"} textColor={"red.400"} boxSize={6} as={Trash2} />
          </Flex>
        </DrawerBody>
        <DrawerFooter flexDir={"column"}>
          <Flex gap={4} justify={"space-around"} align={"center"}>
            <Text fontSize={"lg"} fontWeight={"bold"}>
              Total: $100
            </Text>
            <Text fontSize={"sm"}>Shipping not included</Text>
          </Flex>
          <IconButton
            w={"full"}
            borderRadius={0}
            colorScheme="primary"
            aria-label="Checkout"
            icon={<Text>Checkout</Text>}
            type="submit"
            form="cart-form"
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
