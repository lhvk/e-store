import styled from "styled-components";

export const FormContainer = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${(props) => (props.isMobile = "100%")};
  max-width: 500px;

  p {
    font-size: 1.4rem;
    color: ${(props) => props.theme.color.error};
  }
`;

export const InputField = styled.input`
  font-size: 1.8rem;
  padding: 10px;
  border: solid 1px
    ${(props) =>
      props.isError
        ? (props) => props.theme.color.error
        : props.theme.color.primary};
`;

export const TextField = styled.textarea`
  font-size: 1.8rem;
  padding: 10px;
  border: solid 1px
    ${(props) =>
      props.isError
        ? (props) => props.theme.color.error
        : props.theme.color.primary};
`;
