import React from "react";
import { CountBadge, Logo, Navigation, ShoppingCart, ShoppingCartContainer } from "./index.styles";
import { Link, useNavigate } from "react-router-dom";
import { Flex } from "../../Flex";
import { Button } from "../../Buttons";
import { Box } from "../../Box";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export function Header() {
  const isMobile = useMediaQuery("(max-width: 420px)");
  const goBack = useNavigate();
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
                  $hasContent={true}>
                  4
                </CountBadge>
              </ShoppingCartContainer>
            </Link>
          </Flex>
        </Flex>
      </Navigation>

      {window.location.pathname !== "/" && (
        <Box
          ml={isMobile ? "10px" : "50px"}
          mb={"10px"}>
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
