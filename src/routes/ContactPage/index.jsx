import React from "react";
import { Helmet } from "react-helmet-async";
import { schema } from "./schema";
import { ContactForm, Flex } from "../../components";

export function ContactPage() {
  return (
    <>
      <Helmet>
        <title>E-store | Contact</title>
      </Helmet>

      <main>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center">
          <h1 style={{ textAlign: "center" }}>Contact us</h1>

          <ContactForm schema={schema} />
        </Flex>
      </main>
    </>
  );
}
