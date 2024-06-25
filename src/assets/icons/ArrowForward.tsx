/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@chakra-ui/react";

export const ArrowForward = ({ props, fill }: any) => {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="20"
        viewBox="0 0 17 20"
        fill="none"
      >
        <path
          d="M12.6716 8.60404L7.3076 1.94527L8.7218 0.189697L16.5 9.84542L8.7218 19.501L7.3076 17.7454L12.6716 11.0868H0.5V8.60404H12.6716Z"
          fill={fill ? fill : "#4A57B3"}
        />
      </svg>
    </Icon>
  );
};
