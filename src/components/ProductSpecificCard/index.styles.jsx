import styled from "styled-components";
import { Flex } from "../Flex";
import { Box } from "../Box";

export const ProductContainer = styled(Flex)`
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;

  img {
    width: 100%;
    object-fit: cover;

    @media (min-width: 480px) {
      border-radius: 10px;
    }
  }
`;

export const ProductImage = styled(Box)`
  flex-grow: 1;
  flex-basis: auto;
  max-width: 600px;
`;

export const ProductInfo = styled.article`
  flex-grow: 1;
  flex-basis: auto;
  max-width: 600px;
`;
