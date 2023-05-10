import React from "react";
import styled from "styled-components";
import hero from "../../img/hero.jpg";
import { ButtonPrimary, Flex } from "../../index.styles";
import { messages } from "../../messages";

const HeroBanner = styled.div`
  background-color: ${(props) => props.theme.color.secondary};
  background-image: url(${hero});
  color: ${(props) => props.theme.color.tertiary};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding-top: 200px;
  padding-bottom: 200px;
  background-blend-mode: multiply;
  }
`;

const HeroContainer = styled(Flex)`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;

export function Hero() {
  return (
    <HeroBanner>
      <HeroContainer flexDirection="column" gap="20px" alignItems="center">
        <h1>{messages.welcome}</h1>
        <p>{messages.subTitle}</p>
        <ButtonPrimary>Explore</ButtonPrimary>
      </HeroContainer>
    </HeroBanner>
  );
}
