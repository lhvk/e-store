import styled from "styled-components";
import { Flex } from "../Flex";

const LoadingAnimation = styled(Flex)`
  .circle {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: 10px;
    box-shadow: inset 0 0 0 2px #fff;
    transform-origin: center;
    animation: fill 1.5s ease-in-out infinite;
  }

  .circle-1 {
    animation-delay: 0s;
  }

  .circle-2 {
    animation-delay: -0.4s;
  }

  .circle-3 {
    animation-delay: -0.8s;
  }

  .circle-4 {
    animation-delay: -1.2s;
  }

  @keyframes fill {
    0% {
      transform: scale(1);
    }

    50% {
      box-shadow: inset 0 0 0 2px #fff,
        inset 0 0 0 6px ${(props) => props.theme.color.secondary};
      transform: scale(1.5);
    }

    100% {
      box-shadow: inset 0 0 0 2px #fff, inset 0 0 0 6px #fff;
      transform: scale(1);
    }
  }
`;

export function Loader() {
  return (
    <LoadingAnimation
      justifyContent="center"
      alignItems="center"
      h="100%">
      <div className="circle circle-1"></div>
      <div className="circle circle-2"></div>
      <div className="circle circle-3"></div>
      <div className="circle circle-4"></div>
    </LoadingAnimation>
  );
}
