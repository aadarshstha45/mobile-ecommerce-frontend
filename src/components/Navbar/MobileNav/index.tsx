import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
} from "@chakra-ui/react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNav = ({ isOpen, onClose }: MobileNavProps) => {
  return (
    <Drawer placement="left" isOpen={isOpen} onClose={onClose} size="full">
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Mobile Nav</DrawerHeader>
        <DrawerBody>Mobile Nav Body</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
