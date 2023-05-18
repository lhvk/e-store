import { Link } from "react-router-dom";
import { Button, Flex } from "../../components";

export function CheckoutSuccessPage() {
  return (
    <Flex
      mt="20px"
      flexDirection="column"
      alignItems="center"
      gap="10px">
      <h1>Payment Complete</h1>
      <p>Thank you for shopping at E-store!</p>
      <p>Your products will ship in 1-3 business days</p>

      <Link to={"/"}>
        <Button secondary>Return to home</Button>
      </Link>
    </Flex>
  );
}
