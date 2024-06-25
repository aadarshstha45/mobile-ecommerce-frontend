/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@chakra-ui/react";

function SearchIcon(props: any) {
  return (
    <Icon
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
      >
        <path
          d="M9.77581 18.5516C14.6226 18.5516 18.5516 14.6226 18.5516 9.77581C18.5516 4.92906 14.6226 1 9.77581 1C4.92906 1 1 4.92906 1 9.77581C1 14.6226 4.92906 18.5516 9.77581 18.5516Z"
          stroke="#3A4651"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.9707 15.9705L22.0002 22"
          stroke="#3A4651"
          strokeWidth="2"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
}

export default SearchIcon;
