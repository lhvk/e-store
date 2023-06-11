import React from "react";
import { messages } from "../../messages";
import { HeroBanner, HeroContainer, Overlay } from "./index.styles";
import { Button } from "../Buttons";

export function Hero({ scrollToProducts }) {
  return (
    <HeroBanner>
      <Overlay>
        <HeroContainer>
          <h1>{messages.welcome}</h1>
          <p>{messages.subTitle}</p>
          <Button
            primary
            onClick={scrollToProducts}>
            Explore
          </Button>
        </HeroContainer>
      </Overlay>
    </HeroBanner>
  );
}
