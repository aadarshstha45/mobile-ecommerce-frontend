/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@chakra-ui/react";

export const HamBurgerIcon = (props: any) => {
  return (
    <Icon width="25" height="16" viewBox="0 0 25 16" fill="none" {...props}>
      <path d="M1 2H22" stroke="#3A4651" strokeLinejoin="round" />
      <path d="M1 8H22" stroke="#3A4651" strokeLinejoin="round" />
      <path d="M1 14H22" stroke="#3A4651" strokeLinejoin="round" />
    </Icon>
  );
};
