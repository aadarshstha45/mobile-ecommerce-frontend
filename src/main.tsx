import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { CustomProvider } from "rsuite";
import App from "./App.tsx";
import "./index.css";
import { theme } from "./theme/index.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CustomProvider>
          <Toaster position="top-right" />
          <App />
        </CustomProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
