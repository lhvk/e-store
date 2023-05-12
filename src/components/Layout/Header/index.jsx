import React from "react";
import { CountBadge, Logo, Navigation, ShoppingCart, ShoppingCartContainer } from "./index.styles";
import { Link } from "react-router-dom";
import { Flex } from "../../Flex";

export function Header() {
  return (
    <Navigation>
      <Flex alignItems="center" h="100%" justifyContent="space-between">
        <Link to="/">
          <Logo>e-store</Logo>
        </Link>

        <Flex alignItems="center" w="50px">
          <ShoppingCartContainer title="Shopping cart">
            <ShoppingCart />
            <CountBadge className="count-badge" $hasContent={true}>
              1
            </CountBadge>
          </ShoppingCartContainer>
        </Flex>
      </Flex>
    </Navigation>
  );
}
