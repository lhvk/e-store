import styled from "styled-components";
import { Button, Flex } from "../../../components";

export const AmountContainer = styled(Flex)`
  color: ${(props) => props.theme.color.tertiary};
  background-color: ${(props) => props.theme.color.primary};
  min-height: 44px;
  min-width: 5ch;
  padding: 0 10px;
  align-items: center;
  justify-content: center;
`;

export const Counter = styled(Button)`
  border-radius: ${(props) => props.decrement ?? "0 10px 10px 0"};
  border-radius: ${(props) => props.increment ?? "10px 0 0 10px"};
`;
