import React from "react";
import { Flex, Link } from "../../index.styles";
import { CountBadge, Logo, Navigation, ShoppingCart, ShoppingCartContainer } from "../styled";

export function Header() {
  return (
    <Navigation $isMobile={false}>
      <Flex alignItems="center" h="100%" justifyContent="space-between">
        <Link href="/">
          <Logo>e-store</Logo>
        </Link>

        <Flex alignItems="center" w="50px">
          {/* <Link href="/">contact</Link> */}
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
