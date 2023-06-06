import styled from "styled-components";

const ButtonTemplate = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  border-radius: ${(props) =>
    props.borderRadius ? props.borderRadius : "10px"};
  cursor: pointer;
  font-size: 1.8rem;
  padding: ${(props) => props.padding || "0.25em 0.75em"};
  min-width: ${(props) => props.minWidth || "10ch"};
  min-height: 44px;
  transition: 220ms all ease-in-out;
  text-align: center;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
  width: ${(props) => props.minWidth};
`;

export const Button = styled(ButtonTemplate)`
  color: ${(props) => (props.primary ? props.theme.color.tertiary : null)};
  background-color: ${(props) =>
    props.primary ? props.theme.color.primary : null};

  color: ${(props) => (props.secondary ? props.theme.color.primary : null)};
  background-color: ${(props) =>
    props.secondary ? props.theme.color.secondary : null};

  :hover {
    background-color: #ddd;
    background-color: ${(props) =>
      props.primary ? props.theme.color.primaryLight : null};
    background-color: ${(props) =>
      props.secondary ? props.theme.color.secondaryLight : null};
  }
`;
