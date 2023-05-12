import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  height: ${(props) => props.h};
  width: ${(props) => props.w};
`;
