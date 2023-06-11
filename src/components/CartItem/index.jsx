import { ImageContainer, Price } from "./styled.index";

export function CartItem({ product }) {
  return (
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
  );
}
