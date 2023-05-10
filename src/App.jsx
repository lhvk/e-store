import React from "react";
import { Layout } from "./components/Layout";
import "./css/index.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./index.styles";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./routes/HomePage";
import { RouteNotFound } from "./routes/RouteNotFound";
import { ProductPage } from "./routes/ProductPage";
import { ContactPage } from "./routes/ContactPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="product/:id" element={<ProductPage />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
