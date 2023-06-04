import styled from "styled-components";
import { Box, Flex } from "../../components";

export const ProductSection = styled.section`
  display: flex;
  justify-content: center;

  @media (min-width: 480px) {
    margin: 50px;
  }
`;

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
