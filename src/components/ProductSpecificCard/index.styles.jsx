import styled from "styled-components";
import { Box } from "../Box";

export const ProductContainer = styled(Box)`
  --min-column-size: 350px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(var(--min-column-size), 1fr));

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(var(--min-column-size), 1fr));
  }

  gap: 20px;

  img {
    width: 100%;
    object-fit: cover;

    @media (min-width: 480px) {
      border-radius: 10px;
    }
  }
`;

export const ProductImage = styled(Box)`
  width: 100%;
`;

export const ProductInfo = styled.article`
  width: 100%;
`;
