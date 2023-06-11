import styled from "styled-components";
import { Box } from "../Box";

export const ImageContainer = styled(Box)`
  max-width: 175px;

  img {
    width: 100%;
    height: 100%;
    objectfit: cover;
  }

  @media (max-width: 420px) {
    max-width: 100%;
  }
`;

export const Price = styled.p`
  color: rgba(0, 0, 0, 0.55);
`;
