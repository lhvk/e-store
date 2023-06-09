import {
  BackButton,
  ContactButton,
  CountBadge,
  HomeButton,
  Logo,
  NavItem,
  Navigation,
  ShoppingCart,
  ShoppingCartContainer,
} from "./index.styles";
import { Link, useNavigate } from "react-router-dom";
import { Flex } from "../../Flex";
import { Button } from "../../Buttons";
import { useShoppingCart } from "../../../context/ShoppingCartContext";
import { useMediaQuery } from "../../../hooks";

export function Header() {
  const goBack = useNavigate();
  const { getCartQuantity } = useShoppingCart();
  const isSmallerScreen = useMediaQuery("(max-width: 768px)");

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
            gap="10px"
            alignItems="center">
            <Link to="/">
              {isSmallerScreen ? <HomeButton /> : <NavItem>home</NavItem>}
            </Link>
            <Link to="/contact">
              {isSmallerScreen ? <ContactButton /> : <NavItem>contact</NavItem>}
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
        </Flex>
      </Navigation>

      {window.location.pathname !== "/" &&
        window.location.pathname !== "/success" && (
          <BackButton>
            <Button
              secondary
              onClick={() => {
                goBack(-1);
              }}>
              Back
            </Button>
          </BackButton>
        )}
    </>
  );
}
