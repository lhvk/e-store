import { Link } from "react-router-dom";
import { Button, Flex } from "../../components";
import { messages } from "../../messages";
import { Helmet } from "react-helmet-async";

export function CheckoutSuccessPage() {
  return (
    <>
      <Helmet>
        <title>E-store | Success</title>
      </Helmet>

      <main>
        <Flex
          mt="20px"
          flexDirection="column"
          alignItems="center"
          gap="10px">
          <h1>Payment Complete</h1>
          <p>{messages.thankYou}</p>
          <p>{messages.shipping}</p>

          <Link to={"/"}>
            <Button secondary>Return to home</Button>
          </Link>
        </Flex>
      </main>
    </>
  );
}
