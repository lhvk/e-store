import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Theme } from "./styles/Theme";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
