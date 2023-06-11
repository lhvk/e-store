import styled from "styled-components";
import hero from "../../assets/img/hero.jpg";
import { Flex } from "../../components";

export const Overlay = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeroBanner = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.color.secondary};
  background-image: url(${hero});
  color: ${(props) => props.theme.color.tertiary};
  background-blend-mode: multiply;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-bottom: 50px;
  width: 100%;
  height: 80vh;

  font-size: 2.2rem;
  text-align: center;
  line-height: 1.6;

  h1 {
    font-size: 4rem;
  }

  @media (min-width: 1025px) and (max-width: 1200px) {
    height: 70vh;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    height: 60vh;
    font-size: 2rem;

    h1 {
      font-size: 3.8rem;
    }
  }

  @media (min-width: 480px) and (max-width: 768px) {
    height: 50vh;
    font-size: 1.8rem;

    h1 {
      font-size: 3.5rem;
    }
  }

  @media (min-width: 320px) and (max-width: 480px) {
    height: 85vh;
    font-size: 1.6rem;

    h1 {
      font-size: 3rem;
    }
  }
`;

export const HeroContainer = styled(Flex)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  max-width: 600px;
  padding: 10px;
`;
