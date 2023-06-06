import { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks";

const ShoppingCartContext = createContext();

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [cart, setCart] = useLocalStorage("shopping-cart", []);

  function getPrice(price, discountedPrice) {
    if (price === discountedPrice) {
      return price;
    } else {
      return discountedPrice;
    }
  }

  function getCartQuantity() {
    let initialValue = 0;
    return cart
      .map((product) => product.quantity)
      .reduce((acc, curr) => acc + curr, initialValue);
  }

  function incrementCartQuantity(id, title, imageUrl, price, discountedPrice) {
    const newPrice = getPrice(price, discountedPrice);

    setCart((currentProducts) => {
      if (currentProducts.find((product) => product.id === id) == null) {
        return [
          ...currentProducts,
          {
            id,
            title,
            imageUrl,
            price: newPrice,
            totalPrice: newPrice,
            quantity: 1,
          },
        ];
      } else {
        return currentProducts.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              title,
              imageUrl,
              price,
              quantity: product.quantity + 1,
              totalPrice: Number(((product.quantity + 1) * price).toFixed(2)),
            };
          } else {
            return product;
          }
        });
      }
    });
  }

  function decrementCartQuantity(id, title, imageUrl, price) {
    setCart((currentProducts) => {
      if (
        currentProducts.find((product) => product.id === id)?.quantity === 1
      ) {
        return currentProducts.filter((product) => product.id !== id);
      } else {
        return currentProducts.map((product) => {
          if (product.id === id) {
            return {
              ...product,
              title,
              imageUrl,
              price,
              quantity: product.quantity - 1,
              totalPrice: Number((product.totalPrice - price).toFixed(2)),
            };
          } else {
            return product;
          }
        });
      }
    });
  }

  function removeFromCart(id) {
    setCart((currentProducts) => {
      return currentProducts.filter((product) => product.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cart,
        setCart,
        getCartQuantity,
        incrementCartQuantity,
        decrementCartQuantity,
        removeFromCart,
      }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
