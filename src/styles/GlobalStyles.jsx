import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --ff-primary: "Source Sans Pro", sans-serif;
  --ff-secondary: "Oswald", sans-serif;
  --ff-tertiary: "Monoton", cursive;

  --clr-primary: #011627;
  --clr-secondary: #2ec4b6;
  --clr-tertiary: #fdfffc;
  --clr-text: #000;

  --clr-primaryLight: #012f4b;
  --clr-secondaryLight: #6adcd1;

  font-family: var(--ff-primary);
  color: var(--clr-primary);
  font-size: 62%;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-size: 1.6rem;a
  background-color: var(--clr-tertiary);
  max-width: 1920px;
  margin: 0 auto;
}

h1,
h2,
h3,
h4 {
  font-family: var(--ff-secondary);
}

h1 {
  font-size: 3.2rem;
}

h2 {
  font-size: 2.4rem;
}

h3 {
  font-size: 1.872rem;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
  color: var(--clr-primary);
}
`;
