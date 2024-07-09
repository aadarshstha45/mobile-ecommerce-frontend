/* eslint-disable @typescript-eslint/no-explicit-any */
import { Icon } from "@chakra-ui/react";

export const CheckoutIcon = (props: any) => {
  return (
    <Icon width="72" height="64" viewBox="0 0 72 64" fill="none" {...props}>
      <circle cx="40" cy="32" r="32" fill="#002BC6" />
      <mask
        id="mask0_396_4580"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="7"
        width="53"
        height="52"
      >
        <rect y="7" width="53" height="52" fill="url(#pattern0_396_4580)" />
      </mask>
      <g mask="url(#mask0_396_4580)">
        <rect
          x="-18"
          y="-0.273438"
          width="83.2656"
          height="79.2734"
          fill="white"
        />
      </g>
      <defs>
        <pattern
          id="pattern0_396_4580"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_396_4580"
            transform="matrix(0.00383255 0 0 0.00390625 0.00943396 0)"
          />
        </pattern>
        <image
          id="image0_396_4580"
          width="256"
          height="256"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </Icon>
  );
};
