import { IconBin } from "../../assets/svg";
import { Button } from "../Buttons";
import { CartItem } from "../CartItem";
import { CounterButton } from "../CounterButton";
import { Flex } from "../Flex";
import { ListItem } from "./styles";

export function CartList({
  cart,
  incrementCartQuantity,
  decrementCartQuantity,
  removeFromCart,
}) {
  return (
    <ul>
      {cart.map((product) => (
        <>
          <ListItem key={product.id}>
            <Flex
              mb="20px"
              justifyContent="space-between"
              alignItems="flex-start">
              <Flex gap="20px">
                <CartItem product={product} />
              </Flex>

              <Flex
                alignItems="center"
                gap="20px">
                <div>
                  <CounterButton
                    product={product}
                    incrementCartQuantity={incrementCartQuantity}
                    decrementCartQuantity={decrementCartQuantity}
                  />
                </div>
                <div>kr {product.totalPrice}</div>
                <div>
                  <Button
                    minWidth="50px"
                    onClick={() => removeFromCart(product.id)}>
                    <IconBin />
                  </Button>
                </div>
              </Flex>
            </Flex>
          </ListItem>
        </>
      ))}
    </ul>
  );
}
