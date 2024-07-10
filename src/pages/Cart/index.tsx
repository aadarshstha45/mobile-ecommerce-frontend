import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import {
  useDeleteCartItem,
  useDeleteCartItems,
  useFetchCart,
  useUpdateCartQuantity,
} from "@/api/functions/Cart";
import NoImage from "@/assets/images/NoImage.png";
import DeleteAlert from "@/components/Form/DeleteAlert";
import { calculateTotalPrice } from "@/utils/calculateTotalPrice";
import { LoadingSpinner } from "@/utils/LoadingSpinner";
import { MinusIcon, PlusIcon, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const { data, isPending, isRefetching } = useFetchCart();
  const [items, setItems] = useState<any[]>([]);
  const [itemIds, setItemIds] = useState("");
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
    const storedItems = sessionStorage.getItem("cartItems");
    if (storedItems) {
      const cartItems = JSON.parse(storedItems);
      setItems(cartItems);
      const totalCartPrice = calculateTotalPrice(cartItems);
      setTotalPrice(totalCartPrice);
    }
  }, []);
  const [deletedItems, setDeletedItems] = useState<any[]>([]);
  const handleCheckboxChange = (item: any, isChecked: boolean) => {
    setItems((prevItems) => {
      let updatedItems;
      if (isChecked) {
        // Add to items if not already included
        if (!prevItems.find((prevItem) => prevItem.id === item.id)) {
          updatedItems = [...prevItems, item];
        } else {
          updatedItems = prevItems;
        }
      } else {
        // Remove from items if unchecked
        updatedItems = prevItems.filter((prevItem) => prevItem.id !== item.id);
      }
      // Update session storage
      sessionStorage.setItem("cartItems", JSON.stringify(updatedItems));
      return updatedItems;
    });

    if (isChecked) {
      setDeletedItems((prev) => [...prev, item.id]);
    } else {
      setDeletedItems((prev) => prev.filter((id) => id !== item.id));
    }
  };

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
    } else {
      await deleteCartItem.mutateAsync(itemIds);
    }
    setItemIds("");
    closeDeleteModal();
  };

  const handleCheckout = () => {
    sessionStorage.setItem("cartItems", JSON.stringify(items));
    navigate("/checkout");
    setDeletedItems([]);
    setItems([]);
    window.location.reload();
  };

  const handleUpdateQuantity = async (id: string, quantity: number) => {
    await updateCartQuantity.mutateAsync({
      id: id,
      data: { quantity },
    });
  };

  return (
    <Flex w={"full"} flexDir={"column"} gap={4}>
      <Text fontSize={"xl"}>My Cart</Text>
      {isRefetching ||
        (isPending && (
          <Flex w={"100%"} justify={"center"} zIndex={10}>
            <LoadingSpinner />
          </Flex>
        ))}
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
        data?.map((item: any) => {
          const storedItems = sessionStorage.getItem("cartItems");
          const cartItems = storedItems ? JSON.parse(storedItems) : [];
          console.log("cartItems", cartItems);
          console.log("item", item);
          return (
            <Card
              key={item.id}
              shadow={"none"}
              borderRadius={0}
              p={0}
              borderBottom={"1px solid"}
              borderColor={"#939292"}
              mb={4}
            >
              <CardHeader>{item?.id}</CardHeader>
              <CardBody p={0}>
                <Flex flexDir={"column"} gap={4}>
                  <Flex
                    key={item.id}
                    p={4}
                    align={"center"}
                    justify={{ base: "start", sm: "space-between" }}
                    gap={{ base: 4, sm: 2 }}
                    flexWrap={{ base: "wrap", sm: "nowrap" }}
                  >
                    <Checkbox
                      defaultChecked={cartItems.includes(item.id)}
                      name="checked_item"
                      colorScheme="primary"
                      value={item.id}
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
                    <Stack
                      flexWrap={{ base: "wrap", md: "nowrap" }}
                      ml={3}
                      w={{ base: "100%", sm: "50%" }}
                    >
                      <Text fontWeight={"bold"} fontSize={"lg"}>
                        {item.product?.name}
                      </Text>

                      <HStack flexWrap={"wrap"}>
                        {item.size && <Text>Size: {item.size.name} </Text>}
                        {item.color && <Text>Color: {item.color.name} </Text>}
                      </HStack>
                      <HStack gap={2}>
                        <IconButton
                          onClick={() => {
                            if (item.quantity > 1) {
                              handleUpdateQuantity(item.id, item.quantity - 1);
                            }
                          }}
                          isDisabled={
                            updateCartQuantity.isPending || item.quantity === 1
                          }
                          colorScheme="primary"
                          borderRadius={0}
                          aria-label="Decrease quantity"
                          icon={<MinusIcon />}
                          size={"xs"}
                        />
                        <Input
                          onChange={(e) => {
                            handleUpdateQuantity(
                              item.id,
                              Number(e.target.value)
                            );
                          }}
                          isReadOnly={updateCartQuantity.isPending}
                          type="number"
                          size={"xs"}
                          w={10}
                          border={"none"}
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
                  </Flex>
                </Flex>
              </CardBody>
            </Card>
          );
        })
      ) : (
        <Text>No items in cart</Text>
      )}
      <Flex justify={"end"} flexDir={"column"}>
        <Stack justify={"end"} flexDir={"row"} gap={4} py={4} align={"center"}>
          <Text fontSize={"lg"} fontWeight={600}>
            Total😒😒
          </Text>
          <Text textColor={"primary.500"} fontSize={"lg"} fontWeight={600}>
            Rs. {totalPrice}
          </Text>
        </Stack>
        <Stack align={"end"} justify={"end"} w={"full"}>
          <Button
            w={"fit-content"}
            justifySelf={"end"}
            borderRadius={0}
            colorScheme="primary"
            onClick={handleCheckout}
          >
            Checkout
          </Button>
        </Stack>
      </Flex>
      <DeleteAlert
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        heading="Remove Cart Item(s)"
        message="Are you sure you want to remove item(s) from cart?"
        onDelete={handleDeleteItem}
        isDeleting={deleteCartItem.isPending || deleteCartItems.isPending}
      />
    </Flex>
  );
};

export default Cart;
