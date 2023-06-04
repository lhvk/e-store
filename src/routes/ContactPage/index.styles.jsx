import styled from "styled-components";

export const ContactForm = styled.form`
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: ${(props) => (props.isMobile = "100%")};
  max-width: 500px;

  p {
    font-size: 1.4rem;
    color: #b81414;
  }
`;

export const InputField = styled.input`
  font-size: 1.8rem;
  padding: 10px;
  border: solid 1px ${(props) => (props.isError ? "#b81414" : props.theme.color.primary)};
`;

export const TextField = styled.textarea`
  font-size: 1.8rem;
  padding: 10px;
  border: solid 1px ${(props) => (props.isError ? "#b81414" : props.theme.color.primary)};
`;
