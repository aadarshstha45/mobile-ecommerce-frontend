import { useUpdateImage } from "@/api/auth";
import { BaseURL } from "@/api/axiosSetup";
import { CameraIcon } from "@/assets/icons/CameraIcon";
import { ChangeImageModal } from "@/components/Form/ChangeImageModal";
import { SingleDropzone } from "@/components/Form/Dropzone";
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
import { useState } from "react";
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
  const [isImageDeleted, setIsImageDeleted] = useState<boolean>(false);

  const openImageModal = () => {
    onOpen();
  };

  const handleClose = () => {
    onClose();
    setImage(data?.image ?? null);
  };

  const { control, handleSubmit } = useForm({
    defaultValues: {
      image: null,
    },
  });

  const handleSingleDrop = (acceptedFiles: File[]) => {
    setIsImageUpdated(true);
    const validFile = acceptedFiles[0].type.startsWith("image/");
    const size = acceptedFiles[0].size;
    if (size > 2 * 1048576) {
      setImageError("Image size should be less than 2MB");
      return;
    } else if (!validFile) {
      setImageError("Invalid file type. Please upload an image file.");
      return;
    } else {
      setImageError("");
      setImage(acceptedFiles[0]);
    }
  };

  const onSubmit = async () => {
    const formData = new FormData();
    if (image && isImageUpdated && !isImageDeleted) {
      formData.append("image", image);
    } else {
      formData.append("image", "");
    }

    await mutateAsync(formData);

    await mutateAsync(null);

    onClose();
  };

  return (
    <Flex flexDir={"column"} minH={window.innerHeight} w={"200px"} gap={10}>
      <Stack spacing={4}>
        <Box pos={"relative"} w={"fit-content"} borderRadius={50}>
          <Avatar
            src={`${BaseURL}/${data?.image}`}
            size={"xl"}
            name={data?.name}
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
      <ChangeImageModal
        onSubmit={handleSubmit(onSubmit)}
        heading="Change Profile Picture"
        isOpen={isOpen}
        onClose={handleClose}
        onOpen={onOpen}
        isLoading={isPending}
        isDisabled={!isImageUpdated && !isImageDeleted}
      >
        <SingleDropzone
          control={control}
          name="image"
          file={image}
          onDrop={handleSingleDrop}
          message={imageError}
          onDelete={() => {
            setIsImageDeleted(true);
            setImage(null);
          }}
        />
      </ChangeImageModal>
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
