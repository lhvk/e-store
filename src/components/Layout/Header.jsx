import React from "react";
import { Flex, Link } from "../../index.styles";
import { CountBadge, Logo, Navigation, ShoppingCart, ShoppingCartContainer } from "./styled";

export function Header() {
  return (
    <Navigation>
      <Flex alignItems="center" h="100%" justifyContent="space-between">
        <Flex gap="10px">
          <Link href="/">
            <Logo>e-store</Logo>
          </Link>
          <Link href="/">contact</Link>
        </Flex>

        <ShoppingCartContainer>
          <ShoppingCart />
          <CountBadge className="count-badge" $hasContent={true}>
            1
          </CountBadge>
        </ShoppingCartContainer>
      </Flex>
    </Navigation>
  );
}
