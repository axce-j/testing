import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {  BrowserRouter, HashRouter} from "react-router-dom";
 import { ChakraProvider } from "@chakra-ui/react";
ReactDOM.createRoot(document.getElementById("root")).render(
 
    <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </BrowserRouter>
    
);
