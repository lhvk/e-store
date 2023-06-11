import styled from "styled-components";

export const DiscountBadge = styled.span`
  font-size: ${(props) => props.fontSize || "inherit"};
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.primary};
  border-radius: 20px;
  padding: 0.15em 0.65em;
  margin-left: 20px;
`;

export const Price = styled.span`
  font-size: ${(props) => props.fontSize || "inherit"};
`;

export const DiscountedPrice = styled.span`
  font-size: ${(props) => props.fontSize || "inherit"};
`;

export const PrevPrice = styled.span`
  font-size: ${(props) => props.fontSize || "inherit"};
  color: rgba(0, 0, 0, 0.55);
  text-decoration: line-through;
`;
