import React from "react";
import { Layout } from "./components/Layout";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme } from "./index.styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
