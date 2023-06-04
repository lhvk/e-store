import styled from "styled-components";
import { Flex } from "../../components";

// Product container

export const ProductsListContainer = styled.ul`
  --min-column-size: 350px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(var(--min-column-size), 100%), 1fr));

  gap: 20px;
  margin-bottom: 100px;
`;

// Searchbar

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

// Card
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  max-width: 435px;

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
  height: 300px;
  width: 100%;
  margin-bottom: 30px;

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
  padding: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 200px;

  & h2 {
    color: ${(props) => props.theme.color.primary};
  }
`;

export const ButtonContainer = styled(Flex)`
  gap: 5px;
  position: absolute;
  bottom: 20px;
`;
