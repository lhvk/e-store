import { useMediaQuery } from "../../hooks";
import { Flex } from "../Flex";
import { ImageContainer, Price } from "./index.styles";

export function CartItem({ product }) {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <Flex
      gap="10px"
      flexDirection={isLargeScreen ? "row" : "column"}>
      <ImageContainer>
        <img
          src={product.imageUrl}
          alt={product.description}
        />
      </ImageContainer>

      <div>
        <h2>{product.title}</h2>
        <Price>kr {product.price}</Price>
      </div>
    </Flex>
  );
}
