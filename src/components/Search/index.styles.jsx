import styled from "styled-components";

export const SearchBar = styled.input`
  margin-bottom: 20px;
  width: 100%;
  font-size: 1.6rem;
  height: 50px;
  max-width: 435px;
  border-radius: 8px;
  border: 2px solid ${(props) => props.theme.color.secondary};
  padding: 10px;
`;
