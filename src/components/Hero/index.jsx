import React from "react";
import styled from "styled-components";
import hero from "../../img/hero.jpg";
import { ButtonPrimary, Flex } from "../../index.styles";

const HeroBanner = styled.div`
  background-color: ${(props) => props.theme.color.secondary};
  background-image: url(${hero});
  color: ${(props) => props.theme.color.tertiary};
  background-repeat: no-repeat;
  background-size: cover;

  background-blend-mode: multiply;

  padding-top: 200px;
  padding-bottom: 200px;
`;

export function Hero() {
  return (
    <HeroBanner>
      <Flex flexDirection="column" gap="20px" style={{ maxWidth: "500px", padding: "0 50px", textTransform: "uppercase" }}>
        <div>
          <h1>Welcome to the E-store! Lorem ipsum dolor sit amet</h1>
        </div>
        <div>
          <ButtonPrimary>Explore</ButtonPrimary>
        </div>
      </Flex>
    </HeroBanner>
  );
}
