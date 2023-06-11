import styled from "styled-components";
import { Box } from "../Box";

export const ImageContainer = styled(Box)`
  img {
    width: 100%;
    height: 100%;
    objectfit: cover;
  }

  @media (min-width: 768px) {
    max-width: 175px;
  }
`;

export const Price = styled.p`
  color: rgba(0, 0, 0, 0.55);
`;
