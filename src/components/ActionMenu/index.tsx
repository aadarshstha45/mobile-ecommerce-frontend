import { EditIcon } from "@chakra-ui/icons";
import {
  Flex,
  Icon,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { EllipsisVerticalIcon, Eye, Trash2Icon } from "lucide-react";
import React from "react";

interface ActionMenuProps {
  onView?: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

const ActionMenu = ({ onView, onEdit, onDelete }: ActionMenuProps) => {
  const menuItems = [
    {
      id: 1,
      icon: Eye,
      color: "green.500",
      label: "View",
      onClick: onView,
    },
    {
      id: 2,
      icon: EditIcon,
      color: "blue.500",
      label: "Edit",
      onClick: onEdit,
    },
    {
      id: 3,
      icon: Trash2Icon,
      color: "red.500",
      label: "Delete",
      onClick: onDelete,
    },
  ];
  return (
    <Menu isLazy colorScheme="primary" placement="bottom-end">
      <MenuButton pos={"absolute"} top={2} right={2}>
        <Icon as={EllipsisVerticalIcon} color="primary.500" boxSize={4} />
      </MenuButton>
      <MenuList
        border={"1px solid"}
        textColor={"primary.500"}
        mt={-2}
        py={0}
        overflow={"hidden"}
        minW={"100px"}
      >
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <MenuItem onClick={item.onClick} py={1}>
              <Flex align={"center"} gap={3}>
                <Icon as={item.icon} color={item.color} boxSize={3} />
                <Text fontSize={{ base: "14px", md: "16px" }}>
                  {item.label}
                </Text>
              </Flex>
            </MenuItem>
            <MenuDivider
              opacity={index !== menuItems.length - 1 ? 1 : 0}
              my={0}
            />
          </React.Fragment>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ActionMenu;
