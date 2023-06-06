import styled from "styled-components";

// Product container

export const ProductsListContainer = styled.ul`
  --min-column-size: 350px;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(min(var(--min-column-size), 100%), 1fr)
  );

  gap: 20px;
  margin-bottom: 100px;
`;
