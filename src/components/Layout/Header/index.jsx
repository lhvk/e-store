import { CountBadge, Logo, Navigation, ShoppingCart, ShoppingCartContainer } from "./index.styles";
import { Link, useNavigate } from "react-router-dom";
import { Flex } from "../../Flex";
import { Button } from "../../Buttons";
import { Box } from "../../Box";
import { useShoppingCart } from "../../../context/ShoppingCartContext";

export function Header() {
  const goBack = useNavigate();
  const { getCartQuantity } = useShoppingCart();

  return (
    <>
      <Navigation>
        <Flex
          alignItems="center"
          h="100%"
          justifyContent="space-between">
          <Link to="/">
            <Logo>e-store</Logo>
          </Link>

          <Flex
            alignItems="center"
            w="50px">
            <Link to="checkout">
              <ShoppingCartContainer title="Shopping cart">
                <ShoppingCart />
                <CountBadge
                  className="count-badge"
                  $hasContent={getCartQuantity()}>
                  {getCartQuantity()}
                </CountBadge>
              </ShoppingCartContainer>
            </Link>
          </Flex>
        </Flex>
      </Navigation>

      {window.location.pathname !== "/" && window.location.pathname !== "/success" && (
        <Box mb={"10px"}>
          <Button
            secondary
            onClick={() => {
              goBack(-1);
            }}>
            Back
          </Button>
        </Box>
      )}
    </>
  );
}
