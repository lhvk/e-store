import { Box } from "../../components/Box";
import { Flex } from "../../components/Flex";
import { DiscountBadge, DiscountedPrice, PrevPrice, Price } from "./index.styles";

export const calcDiscount = function (price, discountedPrice, fontSize) {
  if (discountedPrice < price) {
    let calcDiff = ((price - discountedPrice) / price) * 100;
    const diff = Math.trunc(calcDiff);

    if (window.location.pathname.startsWith("/product")) {
      return (
        <>
          <Flex
            alignItems="center"
            gap="16px">
            <DiscountedPrice fontSize={fontSize}>kr {discountedPrice}</DiscountedPrice>
            <DiscountBadge>save {diff}%</DiscountBadge>
            <PrevPrice fontSize={fontSize}>kr {price}</PrevPrice>
          </Flex>
        </>
      );
    }

    return (
      <>
        <Box>
          <DiscountedPrice fontSize={fontSize}>kr {discountedPrice}</DiscountedPrice>
          <DiscountBadge>save {diff}%</DiscountBadge>
        </Box>
        <Box>
          <PrevPrice fontSize={fontSize}>kr {price}</PrevPrice>
        </Box>
      </>
    );
  }

  return (
    <Box>
      <Price fontSize={fontSize}>kr {price}</Price>
    </Box>
  );
};
