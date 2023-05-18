import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Theme } from "./styles/Theme";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <BrowserRouter>
      <ShoppingCartProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <ToastContainer />
          <HelmetProvider>
            <Router />
          </HelmetProvider>
        </ThemeProvider>
      </ShoppingCartProvider>
    </BrowserRouter>
  );
}

export default App;
