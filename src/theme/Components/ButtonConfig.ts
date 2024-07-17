import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
  borderRadius: 2,
  fontWeight: 500,
});

const outline = defineStyle({
  borderRadius: 2,
  fontWeight: 500,
});

export const ButtonConfig = defineStyleConfig({
  defaultProps: {
    variant: "solid",
    colorScheme: "primary",
  },
  variants: { solid, outline },
});
