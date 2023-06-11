export function calcTotalPrice({ cart }) {
  const totalPrice = cart
    ?.map((x) => x.totalPrice)
    .reduce((acc, currVal) => acc + currVal, 0);

  return totalPrice !== undefined ? Number(totalPrice.toFixed(2)) : 0;
}
