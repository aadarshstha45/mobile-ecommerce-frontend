/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@chakra-ui/react";

export const DiscountBanner = (props: any) => {
  return (
    <Icon viewBox="0 0 626 500" {...props}>
      <svg
        width="713"
        height="502"
        viewBox="0 0 713 502"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M527.5 0.30957L712 499.31H86C195.2 234.874 364.333 53.1967 527.5 0.30957Z"
          fill="#0025A7"
          fill-opacity="0.2"
        />
        <path
          d="M713 164.31V501.31H454L462.957 435.18C475.496 311.439 634.877 203.041 713 164.31Z"
          fill="#03218A"
          fill-opacity="0.2"
        />
        <path
          d="M133.807 139.31L0 501.31H454C374.804 309.474 252.142 177.677 133.807 139.31Z"
          fill="#001E86"
          fill-opacity="0.2"
        />
      </svg>
    </Icon>
  );
};
