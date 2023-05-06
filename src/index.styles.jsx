import styled from "styled-components";

const palette = {
  black: "#000",
  cyan: "#2ec4b6",
  white: "#fdfffc",
  darkBlue: "#011627",
};

export const theme = {
  color: {
    text: palette.black,
    primary: palette.cyan,
    secondary: palette.darkBlue,
    tertiary: palette.white,
  },
};

const ButtonTemplate = styled.button`
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  padding: 10px 20px;
  transition: ease-in, 0.3s;
`;

export const ButtonPrimary = styled(ButtonTemplate)`
  color: white;
  background-color: blue;
  :hover {
    background-color: red;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  gap: ${(props) => props.gap};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  height: ${(props) => props.h};
  width: ${(props) => props.w};
`;

export const Link = styled.a`
  color: ${(props) => props.theme.color.text};
  text-decoration: none;
`;
