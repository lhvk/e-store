import styled from "styled-components";
import { Box } from "../Box";

export const ImageContainer = styled(Box)`
  max-width: 150px;

  img {
    width: 100%;
    height: 100%;
    objectfit: cover;
  }
`;

export const Price = styled.p`
  color: rgba(0, 0, 0, 0.55);
`;
