import React from "react";
import { Layout } from "./components/Layout";
import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { RouteNotFound } from "./routes/RouteNotFound";
import { ProductPage } from "./routes/ProductPage";
import { ContactPage } from "./routes/ContactPage";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Theme } from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
