import { Flex } from "../Flex";
import { AmountContainer, Counter } from "./styles.index";

export function CounterButton({
  decrementCartQuantity,
  incrementCartQuantity,
  product,
}) {
  const { id, title, imageUrl, price, discountedPrice, quantity } = product;

  return (
    <Flex>
      <Counter
        onClick={(e) => {
          e.preventDefault();
          decrementCartQuantity(id, title, imageUrl, price, discountedPrice);
        }}
        primary
        decrement
        minWidth="40px">
        -
      </Counter>
      <AmountContainer>{quantity}</AmountContainer>
      <Counter
        onClick={(e) => {
          e.preventDefault();
          incrementCartQuantity(id, title, imageUrl, price, discountedPrice);
        }}
        primary
        increment
        minWidth="40px">
        +
      </Counter>
    </Flex>
  );
}
