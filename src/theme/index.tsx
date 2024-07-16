import { extendTheme } from "@chakra-ui/react";
import { StepsTheme as Steps } from "chakra-ui-steps";
import { ColorStyles as colors } from "./ColorStyle";
import { ButtonConfig as Button } from "./Components";

// Supports weights 300-900
import "@fontsource-variable/rubik";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Rubik Variable",
      },
    },
  },
  colors,
  components: {
    Button,
    Steps,
  },
});
