import React from "react";
import { Flex } from "../../index.styles";
import styled from "styled-components";

const FooterContainer = styled.footer`
  height: 100px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export function Footer() {
  return (
    <FooterContainer>
      <Flex justifyContent="center" alignItems="center" h="100%">
        lhvk 2023 &copy;
      </Flex>
    </FooterContainer>
  );
}
