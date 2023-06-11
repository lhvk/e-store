import { IconBin } from "../../assets/svg";
import { Button } from "../Buttons";
import { CartItem } from "../CartItem";
import { CounterButton } from "../CounterButton";
import { Flex } from "../Flex";
import { ListItem } from "./index.styles";

export function CartList({
  cart,
  incrementCartQuantity,
  decrementCartQuantity,
  removeFromCart,
  isSmallerScreen,
}) {
  return (
    <ul>
      {cart.map((product) => (
        <>
          <ListItem key={product.id}>
            <Flex
              mb="20px"
              justifyContent="space-between"
              alignItems="flex-start"
              flexDirection={isSmallerScreen ? "column" : "row"}>
              <Flex gap="20px">
                <CartItem product={product} />
              </Flex>

              <Flex
                w={isSmallerScreen ? "100%" : "325px"}
                justifyContent="space-between"
                mt={isSmallerScreen ? "10px" : 0}
                alignItems="center">
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
