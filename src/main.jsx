import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
 
import {  HashRouter} from "react-router-dom";
 import { ChakraProvider } from "@chakra-ui/react";
 const queryClient= new QueryClient()
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider   client={queryClient}>
    <HashRouter basename="/">
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </HashRouter>
  
    </QueryClientProvider>
   
   </React.StrictMode>
);
