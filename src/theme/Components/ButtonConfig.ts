import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
  fontWeight: 400,
});

const outline = defineStyle({
  fontWeight: 400,
});

export const ButtonConfig = defineStyleConfig({
  defaultProps: {
    variant: "solid",
    colorScheme: "primary",
  },
  variants: { solid, outline },
});
