/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@chakra-ui/react";

export const AddCartIcon = (props: any) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <svg
        width="24"
        height="23"
        viewBox="0 0 24 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="5.99303"
          y="4.09778"
          width="12.0558"
          height="13.1522"
          fill="url(#pattern0_519_487)"
        />
        <defs>
          <pattern
            id="pattern0_519_487"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_519_487"
              transform="matrix(0.0114836 0 0 0.0105263 -0.0167612 0)"
            />
          </pattern>
          <image
            id="image0_519_487"
            width="90"
            height="95"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </Icon>
  );
};

export const AddWishListIcon = (props: any) => {
  return (
    <Icon viewBox="0 0 24 24" {...props}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="5.99303"
          y="5.92395"
          width="12.0558"
          height="13.1522"
          fill="url(#pattern0_519_490)"
        />
        <defs>
          <pattern
            id="pattern0_519_490"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_519_490"
              transform="matrix(0.0105263 0 0 0.00964885 0 0.0995729)"
            />
          </pattern>
          <image
            id="image0_519_490"
            width="95"
            height="83"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </Icon>
  );
};
