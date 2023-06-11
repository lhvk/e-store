import { Link } from "react-router-dom";
import { Button, Flex } from "../../components";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { messages } from "../../messages";
import { calcTotalPrice } from "../../utils";
import { CartList } from "../../components/CartList";

export function CheckoutPage() {
  const {
    cart,
    setCart,
    getCartQuantity,
    incrementCartQuantity,
    decrementCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  return (
    <main>
      <section>
        <h1>Cart</h1>

        {cart.length > 0 ? (
          <>
            <CartList
              cart={cart}
              incrementCartQuantity={incrementCartQuantity}
              decrementCartQuantity={decrementCartQuantity}
              removeFromCart={removeFromCart}
            />
            <Flex
              justifyContent="space-between"
              mb="20px">
              <h3>Total products: {getCartQuantity()}</h3>

              <h3>Total sum: kr {calcTotalPrice({ cart })}</h3>
            </Flex>

            <Flex justifyContent="flex-end">
              <Link to="/success">
                <Button
                  primary
                  onClick={() => setCart([])}>
                  Proceed to checkout
                </Button>
              </Link>
            </Flex>
          </>
        ) : (
          <div>{messages.emptyCart}</div>
        )}
      </section>
    </main>
  );
}
