import React from "react";
import { Flex } from "../../index.styles";
import { CountBadge, Logo, Navigation, ShoppingCart, ShoppingCartContainer } from "../styled";
import { useMediaQuery } from "../../utils";
import { Link } from "react-router-dom";

export function Header() {
  const isMediumScreen = useMediaQuery("(max-width: 1920px)");

  return (
    <Navigation isMediumScreen={isMediumScreen}>
      <Flex alignItems="center" h="100%" justifyContent="space-between">
        <Link to="home">
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
