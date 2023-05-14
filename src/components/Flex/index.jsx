import styled from "styled-components";
import { Box } from "../Box";

export const Flex = styled(Box)`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  height: ${(props) => props.h};
  width: ${(props) => props.w};
`;
