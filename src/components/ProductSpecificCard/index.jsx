import { IconCartOutline } from "../../assets/svg";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useMediaQuery } from "../../hooks";
import { messages } from "../../messages";
import { productAdded } from "../../utils";
import { Box } from "../Box";
import { Button } from "../Buttons";
import { CalcDiscount } from "../CalcDiscount";
import { Flex } from "../Flex";
import { StarRating } from "../StarRating";
import { ProductContainer, ProductImage, ProductInfo } from "./index.styles";

export function ProductSpecificCard({ data: product }) {
  const isMobile = useMediaQuery("(max-width: 480px)");
  const { incrementCartQuantity } = useShoppingCart();

  return (
    <ProductContainer key={product.id}>
      <ProductImage>
        <img
          src={product.imageUrl}
          alt={product.description}
        />
      </ProductImage>
      <Flex
        gap="10px"
        flexDirection="column"
        px={isMobile ? "10px" : "0"}>
        <h1>{product.title}</h1>
        <div>{StarRating(product.rating, "28px", product.reviews.length)}</div>

        <Box mb="20px">
          {CalcDiscount(
            product.price,
            product.discountedPrice,
            isMobile ? "2rem" : "2.8rem"
          )}
        </Box>
        <Box mb="10px">
          <p>{product.description} </p>
        </Box>

        <ProductInfo>
          <h2>Reviews</h2>
          {product.reviews.length > 0 ? (
            product.reviews.map((review) => (
              <>
                <h3>{review.username}</h3>
                <div>{StarRating(product.rating, "18px")}</div>
                <p>{review.description}</p>
              </>
            ))
          ) : (
            <p>{messages.noReviews}</p>
          )}
        </ProductInfo>
        <Flex
          mt="20px"
          gap="10px">
          <Button
            onClick={() => {
              incrementCartQuantity(
                product.id,
                product.title,
                product.imageUrl,
                product.price,
                product.discountedPrice
              );
              productAdded(product.title);
            }}
            primary
            minWidth="19ch">
            <IconCartOutline
              width="32px"
              height="32px"
            />
            Add to cart
          </Button>
        </Flex>
      </Flex>
    </ProductContainer>
  );
}
