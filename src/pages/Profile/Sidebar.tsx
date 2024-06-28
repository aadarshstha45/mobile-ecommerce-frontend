import { useUpdateImage } from "@/api/auth";
import { BaseURL } from "@/api/axiosSetup";
import { CameraIcon } from "@/assets/icons/CameraIcon";
import AvatarIcon from "@/assets/icons/UserIcon/user.png";
import { SingleDropzone } from "@/components/Form/Dropzone";
import { ModalForm } from "@/components/Form/ModalForm";
import {
  Avatar,
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useLocation } from "react-router-dom";

const sidebarLinks = [
  {
    id: 1,
    label: "Profile Details",
    to: "",
  },
  {
    id: 2,
    label: "Saved Address",
    to: "saved-address",
  },
  {
    id: 3,
    label: "My Purchases",
    to: "purchases",
  },
  {
    id: 4,
    label: "My Orders",
    to: "orders",
  },
  {
    id: 5,
    label: "Account Settings",
    to: "account-settings",
  },
];

interface SidebarProps {
  data: any;
}

const Sidebar = ({ data }: SidebarProps) => {
  const path = useLocation().pathname.split("/")[2];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [image, setImage] = useState<File | null>(data?.image ?? null);
  const { mutateAsync, isPending } = useUpdateImage();
  const [imageError, setImageError] = useState<string>("");
  const [isImageUpdated, setIsImageUpdated] = useState<boolean>(false);

  const openImageModal = () => {
    onOpen();
    setImage(data?.image ?? null);

    setIsImageUpdated(false);
  };

  const handleClose = () => {
    onClose();
    setIsImageUpdated(false);
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      image: null,
    },
  });

  useEffect(() => {
    if (data) {
      setImage(data.image);
    }
  }, [data]);

  const handleSingleDrop = (acceptedFiles: File[]) => {
    const validFile = acceptedFiles[0].type.startsWith("image/");
    const size = acceptedFiles[0].size;
    if (size > 2 * 1048576) {
      setImageError("Image size should be less than 2MB");
      setIsImageUpdated(false);
      return;
    } else if (!validFile) {
      setIsImageUpdated(false);
      setImageError("Invalid file type. Please upload an image file.");
      return;
    } else {
      setImageError("");
      setImage(acceptedFiles[0]);
      setIsImageUpdated(true);
    }
  };

  const onSubmit = async () => {
    const formData = new FormData();
    if (image) {
      if (image instanceof File) {
        formData.append("image", image);
      } else {
        formData.append("image", "");
      }
    }
    await mutateAsync(formData);
    setImage(null);
    onClose();
  };

  return (
    <Flex flexDir={"column"} minH={window.innerHeight} w={"200px"} gap={10}>
      <Stack spacing={4}>
        <Box pos={"relative"} w={"fit-content"} borderRadius={50}>
          <Avatar
            src={data?.image ? `${BaseURL}/${data?.image}` : AvatarIcon}
            size={"xl"}
          />
          <IconButton
            colorScheme="primary"
            borderRadius={50}
            aria-label="Change Profile Picture"
            icon={<CameraIcon />}
            pos={"absolute"}
            onClick={openImageModal}
            bottom={-2}
            right={-2}
          />
        </Box>
        <Text fontWeight={500} fontSize={{ base: "12px", md: "24px" }}>
          Hi, {data?.name?.split(" ")[0]}
        </Text>
      </Stack>
      <ModalForm
        onSubmit={handleSubmit(onSubmit)}
        heading="Change Profile Picture"
        isOpen={isOpen}
        onClose={handleClose}
        isLoading={isPending}
        isDisabled={!isImageUpdated}
      >
        <SingleDropzone
          control={control}
          name="image"
          file={image}
          onDrop={handleSingleDrop}
          message={imageError}
          onDelete={() => {
            setImage(null);
            setIsImageUpdated(true);
          }}
        />
      </ModalForm>
      <Stack spacing={4}>
        {sidebarLinks.map((link) => (
          <Link
            key={link.id}
            w={"fit-content"}
            as={NavLink}
            borderRadius={5}
            _activeLink={
              path === link.to // Use location.pathname to check the current path
                ? {
                    bg: "primary.400",
                    color: "white",
                  }
                : {
                    bg: "none",
                  }
            }
            p={2}
            to={`/profile/${link.to}`}
          >
            {link.label}
          </Link>
        ))}
      </Stack>
    </Flex>
  );
};

export default Sidebar;
