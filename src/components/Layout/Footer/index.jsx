import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./index.styles";
import { Flex } from "../../Flex";

export function Footer() {
  return (
    <FooterContainer>
      <Flex
        justifyContent="center"
        alignItems="center"
        h="100%">
        <div>
          <Link to="/contact">contact</Link>
          <p>lhvk 2023 &copy;</p>
        </div>
      </Flex>
    </FooterContainer>
  );
}
