export function Theme() {
  const palette = {
    black: "var(--clr-text)",
    darkBlue: "var(--clr-primary)",
    cyan: "var(--clr-secondary)",
    white: "var(--clr-tertiary)",
    lighterBlue: "var(--clr-primaryLight)",
    lighterCyan: "var(--clr-secondaryLight)",
  };

  const fontFamily = {
    sourceSansPro: "var(--ff-primary)",
    oswald: "var(--ff-secondary)",
    monoton: "var(--ff-tertiary)",
  };

  const theme = {
    color: {
      text: palette.black,
      primary: palette.darkBlue,
      secondary: palette.cyan,
      tertiary: palette.white,

      primaryLight: palette.lighterBlue,
      secondaryLight: palette.lighterCyan,
    },

    font: {
      primary: fontFamily.sourceSansPro,
      secondary: fontFamily.oswald,
      tertiary: fontFamily.monoton,
    },
  };

  return theme;
}
