/* eslint-disable @typescript-eslint/no-explicit-any */
import { IconButton as ButtonIcon } from "@chakra-ui/react";

function IconButton(props: any) {
  return (
    <ButtonIcon
      aria-label={props.label}
      colorScheme={props.colorScheme}
      size={"sm"}
      onClick={props.onClick}
      icon={props.icon}
      {...props}
    />
  );
}

export default IconButton;
