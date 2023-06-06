import { Link } from "react-router-dom";
import { Button, Flex } from "../../components";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { CounterButton } from "./CounterButton";
import { IconBin } from "../../assets/svg";
import { ListItem } from "./styles.index";
import { messages } from "../../messages";

export function CheckoutPage() {
  const {
    cart,
    setCart,
    getCartQuantity,
    incrementCartQuantity,
    decrementCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const total = cart
    .map((x) => x.totalPrice)
    .reduce((acc, currVal) => {
      return acc + currVal;
    }, 0);

  return (
    <main>
      <section>
        <h1>Cart</h1>

        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((product) => (
                <>
                  <ListItem key={product.id}>
                    <Flex
                      mb="20px"
                      justifyContent="space-between"
                      alignItems="flex-start">
                      <Flex gap="20px">
                        <div style={{ width: "200px", height: "200px" }}>
                          <img
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            src={product.imageUrl}
                            alt={product.description}
                          />
                        </div>

                        <div>
                          <h2>{product.title}</h2>
                          <p style={{ color: "rgba(0,0,0,0.55" }}>
                            kr {product.price}
                          </p>
                        </div>
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
            <Flex
              justifyContent="space-between"
              mb="20px">
              <h3>Total products: {getCartQuantity()}</h3>

              <h3>Total sum: kr {total.toFixed(2)}</h3>
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
