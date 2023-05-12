import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const Navigation = styled.header`
  height: 100px;

  @media (max-width: 1920px) {
    padding: 0 50px;
  }

  @media (max-width: 420px) {
    padding: 0 10px;
  }
`;

export const Logo = styled.div`
  font-family: ${(props) => props.theme.font.tertiary};
  color: ${(props) => props.theme.color.primary};
  font-size: 2.2rem;
  letter-spacing: 1px;
  transition: 0.4s;

  &:hover {
    filter: drop-shadow(0 0 0.75rem ${(props) => props.theme.color.secondary});
  }
`;

export const ShoppingCartContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: 0.5s;

  &:hover {
    transform: rotate(25deg);
    .count-badge {
      transform: rotate(335deg);
      bottom: 15px;
      left: 30px;
    }
  }
`;

export const ShoppingCart = styled(FaShoppingCart)`
  color: ${(props) => props.theme.color.primary};
  font-size: 25px;
`;

export const CountBadge = styled.div`
  display: ${(props) => (props.$hasContent ? "flex" : "none")};
  font-weight: 700;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.primary};
  bottom: 18px;
  left: 18px;
  transition: 1s;
`;
