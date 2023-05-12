import React from "react";
import { messages } from "../../../messages";
import { HeroBanner, HeroContainer } from "./index.styles";
import { Button } from "../../Buttons";

export function Hero() {
  return (
    <HeroBanner>
      <HeroContainer flexDirection="column" gap="20px" alignItems="center">
        <h1>{messages.welcome}</h1>
        <p>{messages.subTitle}</p>
        <Button primary>Explore</Button>
      </HeroContainer>
    </HeroBanner>
  );
}
