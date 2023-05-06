import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

export const MainContainer = styled.div`
  height: 500px;
`;

export const Navigation = styled.header`
  background-color: ${(props) => props.theme.color.primary};
  height: 80px;
  padding: 0 50px;
`;

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.color.primary};
  height: 80px;
`;

export const Logo = styled.div`
  color: ${(props) => props.theme.color.secondary};
  font-size: 20;
  font-weight: bold;
  letter-spacing: 1px;
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
      bottom: 5px;
      left: 25px;
    }
  }
`;

export const ShoppingCart = styled(FaShoppingCart)`
  color: ${(props) => props.theme.color.secondary};
  font-size: 25px;
`;

export const CountBadge = styled.div`
  display: ${(props) => (props.$hasContent ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: #eb0000;
  color: #fff;
  bottom: 18px;
  left: 18px;
  transition: 1s;
`;
