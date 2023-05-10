import styled from "styled-components";
import "./css/index.css";

const palette = {
  black: getComputedStyle(document.body).getPropertyValue("--clr-text"),
  darkBlue: getComputedStyle(document.body).getPropertyValue("--clr-primary"),
  cyan: getComputedStyle(document.body).getPropertyValue("--clr-secondary"),
  white: getComputedStyle(document.body).getPropertyValue("--clr-tertiary"),
  lighterBlue: getComputedStyle(document.body).getPropertyValue("--clr-primaryLight"),
};

const fontFamily = {
  sourceSansPro: getComputedStyle(document.body).getPropertyValue("--ff-primary"),
  oswald: getComputedStyle(document.body).getPropertyValue("--ff-secondary"),
  monoton: getComputedStyle(document.body).getPropertyValue("--ff-tertiary"),
};

export const theme = {
  color: {
    text: palette.black,
    primary: palette.darkBlue,
    secondary: palette.cyan,
    tertiary: palette.white,

    primaryLight: palette.lighterBlue,
  },

  font: {
    primary: fontFamily.sourceSansPro,
    secondary: fontFamily.oswald,
    tertiary: fontFamily.monoton,
  },
};

const ButtonTemplate = styled.button`
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  padding: 0.25em 0.75em;
  min-width: 10ch;
  min-height: 44px;
  transition: 220ms all ease-in-out;
  text-align: center;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
`;

export const ButtonPrimary = styled(ButtonTemplate)`
  color: ${(props) => props.theme.color.tertiary};
  background-color: ${(props) => props.theme.color.primary};

  :hover {
    background-color: ${(props) => props.theme.color.primaryLight};
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
