import styled from "styled-components";

const ButtonTemplate = styled.button`
  border: 0;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  padding: 0.25em 0.75em;
  min-width: 10ch;
  min-height: 44px;
  transition: 220ms all ease-in-out;
  text-align: center;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
`;

export const Button = styled(ButtonTemplate)`
  color: ${(props) => (props.primary ? props.theme.color.tertiary : null)};
  background-color: ${(props) => (props.primary ? props.theme.color.primary : null)};

  color: ${(props) => (props.secondary ? props.theme.color.primary : null)};
  background-color: ${(props) => (props.secondary ? props.theme.color.secondary : null)};

  :hover {
    background-color: ${(props) => (props.primary ? props.theme.color.primaryLight : null)};
    background-color: ${(props) => (props.secondary ? props.theme.color.secondaryLight : null)};
  }
`;
