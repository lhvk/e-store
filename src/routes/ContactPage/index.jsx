import React from "react";
import { Helmet } from "react-helmet-async";
import { ContactForm, Flex } from "../../components";
import { schema } from "../../utils/schema";

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
