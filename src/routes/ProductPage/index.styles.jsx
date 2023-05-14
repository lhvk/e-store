import styled from "styled-components";
import { Flex } from "../../components";

export const ProductSection = styled.section`
  display: flex;
  justify-content: center;

  @media (min-width: 420px) {
    margin: 50px;
  }
`;

export const ProductContainer = styled(Flex)`
  flex-wrap: wrap;
  gap: 30px;

  img {
    width: 100%;
    object-fit: cover;

    @media (min-width: 420px) {
      border-radius: 10px;
    }
  }
`;
