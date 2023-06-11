import React from "react";
import { Link } from "react-router-dom";
import { FooterContainer } from "./index.styles";
import { Flex } from "../../Flex";
import { Box } from "../../Box";

export function Footer() {
  return (
    <FooterContainer>
      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        h="100%">
        <Box mb="10px">
          <h2>Links</h2>
          <Link to="/">
            <h4>home</h4>
          </Link>
          <Link to="/contact">
            <h4>contact</h4>
          </Link>
          <Link to="/checkout">
            <h4>shopping cart</h4>
          </Link>

          <Box mt="20px">lhvk {new Date().getFullYear()} &copy;</Box>
        </Box>
      </Flex>
    </FooterContainer>
  );
}
