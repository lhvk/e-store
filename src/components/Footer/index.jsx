import React from "react";
import { Flex } from "../../index.styles";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
        <div>
          <Link to="/contact">contact</Link>
          <p>lhvk 2023 &copy;</p>
        </div>
      </Flex>
    </FooterContainer>
  );
}
