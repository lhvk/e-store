import { useMediaQuery } from "../../hooks";
import { ImageContainer, Price } from "./styled.index";

export function CartItem({ product }) {
  const isLargeScreen = useMediaQuery("(min-width: 768px)");

  return (
    <>
      {isLargeScreen ? (
        <>
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
        </>
      ) : (
        <div>
          <ImageContainer>
            <img
              src={product.imageUrl}
              alt={product.description}
            />
          </ImageContainer>

          <h2>{product.title}</h2>
          <Price>kr {product.price}</Price>
        </div>
      )}
    </>
  );
}
