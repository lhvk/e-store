import { Helmet } from "react-helmet-async";
import { messages } from "../../messages";
import { ProductContainer, ProductSection } from "./index.styles";
import { Box, Button, Flex, Loader } from "../../components";
import { useMediaQuery, useProductFetch } from "../../hooks";
import { calcDiscount, starRating } from "../../utils";
import { IconCartOutline } from "../../assets/svg";

export function ProductPage() {
  const isMobile = useMediaQuery("(max-width: 420px)");
  const { data: product, isLoading, isError } = useProductFetch();

  if (isLoading || !product) {
    return <Loader />;
  }

  if (isError) {
    return <Flex alignItems="center">An error occured..</Flex>;
  }

  return (
    <>
      <Helmet>
        <title>Product | {product.title}</title>
      </Helmet>

      <ProductSection>
        <ProductContainer>
          <Box style={{ maxWidth: "600px" }}>
            <img
              src={product.imageUrl}
              alt={product.description}
            />
          </Box>
          <Flex
            gap="10px"
            flexDirection="column"
            px={isMobile ? "10px" : "0"}>
            <h1>{product.title}</h1>
            <div>{starRating(product.rating, "28px", product.reviews.length)}</div>

            <Box mb="20px">{calcDiscount(product.price, product.discountedPrice, isMobile ? "2rem" : "2.8rem")}</Box>
            <Box mb="10px">
              <p>{product.description} </p>
            </Box>

            <Box>
              <h2>Reviews</h2>
              {product.reviews.length > 0 ? (
                product.reviews.map((x) => (
                  <>
                    <h3>{x.username}</h3>
                    <div>{starRating(product.rating, "18px")}</div>
                    <p>{x.description}</p>
                  </>
                ))
              ) : (
                <p>{messages.noReviews}</p>
              )}
            </Box>
            <Box mt="20px">
              <Button
                primary
                minWidth="19ch">
                <IconCartOutline
                  width="32px"
                  height="32px"
                />
                Add to cart
              </Button>
            </Box>
          </Flex>
        </ProductContainer>
      </ProductSection>
    </>
  );
}
