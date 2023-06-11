import React from "react";
import { FooterContainer } from "./index.styles";
import { Flex } from "../../Flex";
import { Box } from "../../Box";

export function Footer() {
  return (
    <FooterContainer>
      <Flex
        flexDirection="column"
        justifyContent="flex-end"
        alignItems="center"
        h="100%">
        <Box mb="20px">lhvk {new Date().getFullYear()} &copy;</Box>
      </Flex>
    </FooterContainer>
  );
}
