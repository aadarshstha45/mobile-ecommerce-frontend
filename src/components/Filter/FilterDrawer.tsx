import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";
import React from "react";

interface IFilterDrawer {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const FilterDrawer = ({ isOpen, onClose, children }: IFilterDrawer) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="left">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottom={"1px solid #D9D9D9"}>Filter</DrawerHeader>
        <DrawerBody display={"flex"} gap={4} flexDir={"column"}>
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
