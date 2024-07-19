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
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import { isAuthenticated } from "@/api/axiosSetup";
import {
  useDeleteCartItem,
  useDeleteCartItems,
  useFetchCart,
  useUpdateCartQuantity,
} from "@/api/functions/Cart";
import NoImage from "@/assets/images/NoImage.png";
import { calculateTotalPrice } from "@/utils/calculateTotalPrice";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DeleteAlert from "../Form/DeleteAlert";
interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer = ({ isOpen, onClose }: CartDrawerProps) => {
  const navigate = useNavigate();
  const { data, isPending, isFetching } = isAuthenticated
    ? useFetchCart()
    : { data: null, isPending: false, isFetching: false };
  console.log(data);
  const [items, setItems] = useState<any[]>([]);
  const [itemIds, setItemIds] = useState<string>("");
  const [deletedItems, setDeletedItems] = useState<any[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const deleteCartItem = useDeleteCartItem();
  const deleteCartItems = useDeleteCartItems();

  const updateCartQuantity = useUpdateCartQuantity();
  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: closeDeleteModal,
  } = useDisclosure();

  useEffect(() => {
    const sessionItems = sessionStorage.getItem("cartItems");
    if (sessionItems) {
      const cartItems = JSON.parse(sessionItems);
      const totalCartPrice = calculateTotalPrice(cartItems);
      setTotalPrice(totalCartPrice);
      setItems(cartItems);
      setDeletedItems(cartItems.map((item: any) => item.id));
    }
  }, [sessionStorage.getItem("cartItems")]);

  const handleCheckboxChange = (item: any, isChecked: any) => {
    if (isChecked) {
      // Add to deletedImages if not already included
      setItems((prev) => [...prev, item]);
      sessionStorage.setItem("cartItems", JSON.stringify([...items, item]));
      setDeletedItems((prev) => [...new Set([...prev, item.id])]);
    } else {
      // Remove from deletedImages
      setItems((prev) => prev.filter((i) => i.id !== item.id));
      sessionStorage.setItem(
        "cartItems",
        JSON.stringify(items.filter((i) => i.id !== item.id))
      );
      setDeletedItems((prev) => prev.filter((id) => id !== item.id));
    }
  };

  const handleDeleteModalOpen = (id: string) => {
    if (id) {
      setItemIds(id);
      onDeleteModalOpen();
    } else {
      setItemIds("");
      onDeleteModalOpen();
    }
  };

  const handleDeleteItem = async () => {
    const formData = new FormData();
    if (deletedItems.length > 0 && itemIds === "") {
      formData.append("ids", JSON.stringify(deletedItems));
      await deleteCartItems.mutateAsync(formData);
      const currentCartItems = JSON.parse(
        sessionStorage.getItem("cartItems") || "[]"
      );
      // Filter out the deleted items
      const updatedCartItems = currentCartItems.filter(
        (item: any) => !deletedItems.includes(item.id)
      );
      // Update the session storage with the new list of items
      sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

      setDeletedItems([]);
    } else {
      await deleteCartItem.mutateAsync(itemIds);
      const currentCartItems = JSON.parse(
        sessionStorage.getItem("cartItems") || "[]"
      );
      const updatedCartItems = currentCartItems.filter(
        (item: any) => item.id !== itemIds
      );
      sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
    setItemIds("");
    closeDeleteModal();
  };

  const handleCheckout = () => {
    sessionStorage.setItem("cartItems", JSON.stringify(items));
    navigate("/checkout");
    setDeletedItems([]);
    setItems([]);
    onClose();
    window.location.reload();
  };

  const handleCartClose = () => {
    onClose();
  };

  const handleQuantityChange = async (id: string, quantity: number) => {
    await updateCartQuantity.mutateAsync({
      id: id,
      data: { quantity },
    });
  };

  const handleUpdateQuantity = async (id: string, quantity: number) => {
    await updateCartQuantity.mutateAsync({
      id: id,
      data: { quantity },
    });

    const currentCartItems = JSON.parse(
      sessionStorage.getItem("cartItems") || "[]"
    );
    // Update the quantity for the specified item
    const updatedCartItems = currentCartItems.map((item: any) => {
      if (item.id === id) {
        return { ...item, quantity: quantity };
      }
      return item;
    });

    // Update the session storage with the new list of items
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setItems(updatedCartItems);
  };

  return (
    <Drawer
      closeOnOverlayClick
      closeOnEsc
      colorScheme="primary"
      isOpen={isOpen}
      onClose={handleCartClose}
      size="lg"
    >
      <DrawerOverlay />
      <DrawerContent pos={"relative"}>
        {isFetching ||
          (isPending && (
            <Flex
              pos={"absolute"}
              w={"100%"}
              justify={"center"}
              bg={"rgba(0,0,0,0.1)"}
              zIndex={10}
            >
              <LoadingSpinner />
            </Flex>
          ))}
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth={"1px"}>My Cart</DrawerHeader>
        <DrawerBody px={1}>
          {deletedItems.length > 0 && (
            <Button
              size={"xs"}
              alignSelf={"end"}
              leftIcon={<Trash2 size={18} />}
              colorScheme="red"
              borderRadius={0}
              py={4}
              mb={4}
              onClick={() => handleDeleteModalOpen("")}
            >
              Delete
            </Button>
          )}

          {data && data?.length > 0 ? (
            <Flex flexDir={"column"} gap={4}>
              {data.map((item: any) => {
                // Retrieve and parse the cartItems from sessionStorage, defaulting to an empty array if not found
                // Determine if the item's ID is included in the cartItems array for the defaultChecked property
                const isItemChecked = items.some(
                  (cartItem: any) => cartItem.id === item.id
                );
                return (
                  <Flex
                    borderBottomWidth={"1px"}
                    key={item.id}
                    align={"center"}
                    gap={2}
                    pb={4}
                    px={4}
                    flexWrap={{ base: "wrap", sm: "nowrap" }}
                  >
                    <HStack gap={2} w={"full"} align={"start"}>
                      <Checkbox
                        alignSelf={"center"}
                        defaultChecked={isItemChecked}
                        name="checked_item"
                        colorScheme="primary"
                        value={item.id}
                        checked={deletedItems.includes(item.id)}
                        onChange={(e) =>
                          handleCheckboxChange(item, e.target.checked)
                        }
                      />
                      <Image
                        borderRadius={"sm"}
                        w={"100px"}
                        aspectRatio={1 / 1}
                        src={item.product?.image ?? NoImage}
                        objectFit={"cover"}
                        objectPosition={"center"}
                        loading="lazy"
                        alt={item.name}
                      />
                      <Stack w={"full"} gap={2}>
                        <Text
                          noOfLines={{ base: 1, md: 2 }}
                          fontSize={{ base: "14px", md: "16px" }}
                        >
                          {item.product?.name}
                        </Text>
                        {item.size || item.color ? (
                          <HStack flexWrap={"wrap"}>
                            {item.size && (
                              <Text fontSize={{ base: "12px", md: "14px" }}>
                                Size: {item.size.name}{" "}
                              </Text>
                            )}
                            {item.color && (
                              <Text fontSize={{ base: "12px", md: "14px" }}>
                                Color: {item.color.name}{" "}
                              </Text>
                            )}
                          </HStack>
                        ) : null}
                        <Text
                          display={{ base: "flex", sm: "none" }}
                          fontSize={{ base: "12px", md: "14px" }}
                          color={"gray.800"}
                        >
                          Rs.
                          {item.size?.price
                            ? item.size.price * item.quantity
                            : item.product.price * item.quantity}
                        </Text>
                        <HStack gap={2}>
                          <IconButton
                            onClick={() => {
                              if (item.quantity > 1) {
                                handleUpdateQuantity(
                                  item.id,
                                  item.quantity - 1
                                );
                              }
                            }}
                            isDisabled={
                              updateCartQuantity.isPending ||
                              item.quantity === 1
                            }
                            colorScheme="primary"
                            borderRadius={0}
                            aria-label="Decrease quantity"
                            icon={<MinusIcon />}
                            size={"xs"}
                          />
                          <Input
                            onChange={(e) =>
                              handleQuantityChange(
                                item.id,
                                Number(e.target.value)
                              )
                            }
                            type="number"
                            isReadOnly
                            size={"xs"}
                            w={10}
                            border={"1px solid #000"}
                            fontWeight={600}
                            fontSize={"md"}
                            focusBorderColor="primary.500"
                            borderRadius={0}
                            textAlign={"center"}
                            px={0}
                            id={`quantity-${item.id}`}
                            name={`quantity-${item.id}`}
                            value={item.quantity}
                          />

                          <IconButton
                            aria-label="Increase quantity"
                            onClick={() => {
                              handleUpdateQuantity(item.id, item.quantity + 1);
                            }}
                            isDisabled={updateCartQuantity.isPending}
                            icon={<PlusIcon />}
                            colorScheme="primary"
                            borderRadius={0}
                            size={"xs"}
                          />
                        </HStack>
                      </Stack>
                    </HStack>

                    <HStack
                      display={{ base: "none", sm: "flex" }}
                      justifySelf={"end"}
                      justify={"end"}
                      gap={4}
                    >
                      <Text textColor={"primary.500"}>
                        Rs.
                        {item.size?.price
                          ? item.size.price * item.quantity
                          : item.product.price * item.quantity}
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
                    </HStack>
                  </Flex>
                );
              })}
            </Flex>
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
              Rs. {totalPrice}
            </Text>
          </Stack>
          <IconButton
            w={"full"}
            borderRadius={0}
            colorScheme="primary"
            aria-label="Checkout"
            icon={<Text>Checkout</Text>}
            onClick={handleCheckout}
            isDisabled={items.length === 0}
          />
        </DrawerFooter>
        <DeleteAlert
          isOpen={isDeleteModalOpen}
          onClose={closeDeleteModal}
          heading="Remove Cart Item(s)"
          message="Are you sure you want to remove item(s) from cart?"
          onDelete={handleDeleteItem}
          isDeleting={deleteCartItem.isPending || deleteCartItems.isPending}
        />
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
