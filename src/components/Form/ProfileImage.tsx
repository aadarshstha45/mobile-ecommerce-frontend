import { useUpdateImage } from "@/api/auth";
import { BaseURL } from "@/api/axiosSetup";
import { useFetchAvatars } from "@/api/functions/Avatars";
import {
  Button,
  HStack,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SingleDropzone } from "./Dropzone";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data?: any;
}

export const TabLabels = [
  { label: "Profile", value: "profile" },
  { label: "Avatar", value: "avatar" },
];

export const ProfileImage = ({ isOpen, onClose, data }: ModalProps) => {
  console.log({ data });
  const [image, setImage] = useState<File | null>(data?.image ?? null);
  const profileImage = useUpdateImage();
  const [imageError, setImageError] = useState<string>("");
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const { data: avatars } = useFetchAvatars();
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
      return;
    } else if (!validFile) {
      setImageError("Invalid file type. Please upload an image file.");
      return;
    } else {
      setImageError("");
      setImage(acceptedFiles[0]);
    }
  };

  const onImageSubmit = async () => {
    console.log({ image });
    const formData = new FormData();
    if (image) {
      if (image instanceof File) {
        formData.append("image", image);
      } else {
        formData.append("image", "");
      }
    }
    await profileImage.mutateAsync(formData);
    setImage(null);
    handleClose();
  };

  const handleClose = () => {
    onClose();
    if (!data.image) {
      setImage(null);
    }
    setSelectedAvatar(null);
  };

  const handleAvatarSubmit = async (avatar: string | null) => {
    if (avatar) {
      await profileImage.mutateAsync({ image: avatar });
      setSelectedAvatar(null);
      handleClose();
      setImage(null);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} motionPreset="slideInTop">
      <ModalOverlay />
      <ModalContent h={"max-content"} maxH={window.innerHeight - 100}>
        <ModalHeader borderBottom={"1px solid #939292"} fontWeight={500}>
          Change Profile Picture
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody minH={"max-content"} overflow={"auto"} pt={4}>
          <Tabs variant="unstyled">
            <TabList w={"fit-content"}>
              {TabLabels.map((tab, index) => (
                <Tab
                  key={index}
                  _selected={{
                    borderBottomColor: "primary.500",
                  }}
                  borderBottom={"6px solid"}
                  borderBottomColor={"primary.50"}
                  fontSize={{ base: "sm", md: "md", xl: "lg" }}
                  whiteSpace={"nowrap"}
                  transition={"border-bottom 0.2s ease-in-out"}
                >
                  {tab.label}
                </Tab>
              ))}
            </TabList>
            <TabPanels>
              <TabPanel>
                <form onSubmit={handleSubmit(onImageSubmit)}>
                  <SingleDropzone
                    control={control}
                    name="image"
                    file={image}
                    onDrop={handleSingleDrop}
                    message={imageError}
                    onDelete={() => {
                      setImage(null);
                    }}
                  />
                  <HStack gap={2} justify={"end"} pt={6}>
                    <Button
                      type="submit"
                      colorScheme="primary"
                      border={"1px solid #000"}
                      borderRadius={3}
                      size={"sm"}
                      isLoading={profileImage.isPending}
                    >
                      {"Save"}
                    </Button>
                    <Button
                      colorScheme="primary"
                      border={"1px solid #000"}
                      borderRadius={3}
                      variant={"outline"}
                      size={"sm"}
                      mr={3}
                      onClick={handleClose}
                    >
                      Cancel
                    </Button>
                  </HStack>
                </form>
              </TabPanel>
              <TabPanel>
                <HStack gap={2} flexWrap={"wrap"}>
                  {avatars?.map((avatar: string, index: number) => (
                    <Image
                      boxSize={16}
                      key={index}
                      borderRadius={50}
                      border={"2px solid"}
                      borderColor={
                        (data?.image &&
                          data?.image.includes(avatar) &&
                          selectedAvatar === null) ||
                        selectedAvatar === avatar
                          ? "primary.500"
                          : "transparent"
                      }
                      onClick={() => setSelectedAvatar(avatar)}
                      src={`${BaseURL}/${avatar}`}
                    />
                  ))}
                </HStack>
                <HStack gap={2} justify={"end"} pt={6}>
                  <Button
                    onClick={() => handleAvatarSubmit(selectedAvatar)}
                    colorScheme="primary"
                    border={"1px solid #000"}
                    borderRadius={3}
                    size={"sm"}
                    isLoading={profileImage.isPending}
                  >
                    {"Save"}
                  </Button>
                  <Button
                    colorScheme="primary"
                    border={"1px solid #000"}
                    borderRadius={3}
                    variant={"outline"}
                    size={"sm"}
                    mr={3}
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </HStack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
