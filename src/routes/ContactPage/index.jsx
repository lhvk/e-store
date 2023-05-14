import React from "react";
import { Helmet } from "react-helmet-async";

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <div>
        <h1 style={{ textAlign: "center" }}>This is the contact page</h1>
      </div>
    </>
  );
}
