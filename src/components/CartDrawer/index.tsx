import {
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Spinner,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import {
  useDeleteCartItem,
  useDeleteCartItems,
  useFetchCart,
} from "@/api/functions/Cart";
import NoImage from "@/assets/images/NoImage.png";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DeleteAlert from "../Form/DeleteAlert";

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const { data, isPending } = useFetchCart();

  const [quantity, setQuantity] = useState(1);
  const { handleSubmit } = useForm();
  const [itemIds, setItemIds] = useState("");
  const deleteCartItem = useDeleteCartItem();
  const deleteCartItems = useDeleteCartItems();
  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: closeDeleteModal,
  } = useDisclosure();

  const [deletedItems, setDeletedItems] = useState<any[]>([]);
  const handleCheckboxChange = (item, isChecked) => {
    if (isChecked) {
      // Add to deletedImages if not already included
      setDeletedItems((prev) => [...new Set([...prev, item.id])]);
    } else {
      // Remove from deletedImages
      setDeletedItems((prev) => prev.filter((id) => id !== item.id));
    }
  };
  console.log(deletedItems);
  const handleDeleteModalOpen = (id: string) => {
    if (id) {
      setItemIds(id);
      onDeleteModalOpen();
    } else {
      onDeleteModalOpen();
    }
  };

  const handleDeleteItem = async () => {
    const formData = new FormData();
    if (deletedItems.length > 0) {
      formData.append("ids", JSON.stringify(deletedItems));
      await deleteCartItems.mutateAsync(formData);
      setDeletedItems([]);
    }
    await deleteCartItem.mutateAsync(itemIds);
    setItemIds("");
    closeDeleteModal();
  };

  return (
    <Drawer
      closeOnOverlayClick
      closeOnEsc
      colorScheme="primary"
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
    >
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
          {deletedItems.length > 0 && (
            <Button
              size={"xs"}
              justifySelf={"end"}
              alignSelf={"end"}
              leftIcon={<Trash2 size={18} />}
              colorScheme="red"
              borderRadius={0}
              onClick={() => handleDeleteModalOpen("")}
            >
              Delete
            </Button>
          )}
          {data?.length > 0 ? (
            <Flex flexDir={"column"} gap={4}>
              {data?.map((item: any) => (
                <Flex
                  borderBottomWidth={"1px"}
                  key={item.id}
                  p={4}
                  align={"center"}
                  justify={"space-between"}
                  gap={2}
                >
                  <Checkbox
                    name="checked_item"
                    colorScheme="primary"
                    value={item.id}
                    checked={deletedItems.includes(item.id)}
                    onChange={(e) =>
                      handleCheckboxChange(item, e.target.checked)
                    }
                  />

                  <Image
                    borderRadius={"lg"}
                    h={"100px"}
                    w={"100px"}
                    src={item.image ?? NoImage}
                    objectFit={"cover"}
                    objectPosition={"center"}
                    loading="lazy"
                    alt={item.name}
                  />
                  <Stack ml={3} w={"50%"}>
                    <Text fontWeight={"bold"} fontSize={"lg"}>
                      {item.product?.name}
                    </Text>
                    <HStack flexWrap={"wrap"}>
                      <Text>Size: {item.size?.name} </Text>
                      <Text>Color: {item.color?.name} </Text>
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
                        size={"xs"}
                        w={10}
                        border={"none"}
                        fontWeight={600}
                        fontSize={"md"}
                        focusBorderColor="primary.500"
                        borderRadius={0}
                        textAlign={"center"}
                        px={0}
                        name="quantity"
                        value={item.quantity ?? quantity}
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
                  <Text textColor={"primary.500"}>
                    Rs.{item.product?.price}
                  </Text>
                  <IconButton
                    w={"fit-content"}
                    variant={"ghost"}
                    colorScheme="red"
                    textColor={"red.400"}
                    boxSize={6}
                    py={4}
                    icon={<Trash2 />}
                    aria-label="Delete item"
                    onClick={() => handleDeleteModalOpen(item.id)}
                  />
                </Flex>
              ))}
            </Flex>
          ) : isPending ? (
            <Spinner />
          ) : (
            <Text>No items in cart</Text>
          )}
        </DrawerBody>
        <DrawerFooter
          pt={0}
          borderTopWidth={"1px"}
          as={Flex}
          flexDir={"column"}
        >
          <Stack
            w={"full"}
            flexDir={"row"}
            gap={4}
            py={4}
            justify={"space-between"}
            align={"center"}
          >
            <Text fontSize={"lg"} fontWeight={600}>
              Total😒😒
            </Text>
            <Text textColor={"primary.500"} fontSize={"lg"} fontWeight={600}>
              $100
            </Text>
          </Stack>
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
        <DeleteAlert
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          heading="Remove Cart Item"
          message="Are you sure you want to remove item(s) from cart?"
          onDelete={handleDeleteItem}
          isDeleting={deleteCartItem.isPending}
        />
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
