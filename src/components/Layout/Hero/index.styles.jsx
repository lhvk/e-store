import styled from "styled-components";
import hero from "../../../img/hero.jpg";
import { Flex } from "../../Flex";

export const HeroBanner = styled.div`
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

export const HeroContainer = styled(Flex)`
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
`;
