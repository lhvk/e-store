import styled from "styled-components";

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
  overflow: hidden;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;

  &:hover .card-img {
    transform: scale(1.25) rotate(2deg);
  }
`;

export const CardHeader = styled.div`
  position: relative;
`;

export const CardImage = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
  width: 100%;
  height: 400px;

  transition: all ease-in-out 0.4s;
`;

export const OnSaleBadge = styled.div`
  display: ${(props) => props.display};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 20px;
  right: 20px;

  padding: 30px;
  height: 50px;
  width: 50px;

  border-radius: 50%;
  background-color: ${(props) => props.theme.color.secondary};
  color: ${(props) => props.theme.color.primary};
`;

export const CardFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  color: ${(props) => props.theme.color.text};

  & h2 {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const ProductsListContainer = styled.ul`
  --min-column-size: 300px;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--min-column-size), 100%), 1fr));

  margin: ${(props) => props.margin};
`;
