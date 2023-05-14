import { Route, Routes } from "react-router-dom";
import { CheckoutPage } from "./CheckoutPage";
import { CheckoutSuccessPage } from "./CheckoutSuccessPage";
import { ContactPage } from "./ContactPage";
import { HomePage } from "./HomePage";
import { ProductPage } from "./ProductPage";
import { RouteNotFound } from "./RouteNotFound";
import { Layout } from "../components/Layout";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}>
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="contact"
          element={<ContactPage />}
        />
        <Route
          path="checkout"
          element={<CheckoutPage />}
        />
        <Route
          path="success"
          element={<CheckoutSuccessPage />}
        />
        <Route
          path="product/:id"
          element={<ProductPage />}
        />
        <Route
          path="*"
          element={<RouteNotFound />}
        />
      </Route>
    </Routes>
  );
}
