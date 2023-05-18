import { Box, Button, Flex, Hero, Loader } from "../../components";
import { Helmet } from "react-helmet-async";
import { useProductsFetch } from "../../hooks";
import { ProductsListContainer, ProductCard, CardHeader, CardImage, OnSaleBadge, CardFooter, ButtonContainer } from "./index.styles";
import { Link } from "react-router-dom";
import { calcDiscount, productAdded, starRating } from "../../utils";
import { IconCartOutline } from "../../assets/svg";
import { useShoppingCart } from "../../context/ShoppingCartContext";

export function HomePage() {
  const { incrementCartQuantity } = useShoppingCart();

  const { data: products, isLoading, isError } = useProductsFetch("https://api.noroff.dev/api/v1/online-shop");

  if (isLoading || !products) {
    return <Loader />;
  }

  if (isError) {
    return <Flex justifyContent="center">An error occured..</Flex>;
  }

  return (
    <>
      <Helmet>
        <title>E-store | Home</title>
      </Helmet>
      <Hero />
      <ProductsListContainer id="product-list-container">
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`product/${product.id}`}>
              <ProductCard>
                <CardHeader>
                  <CardImage
                    className="card-img"
                    src={product.imageUrl}
                  />
                  <OnSaleBadge display={product.discountedPrice < product.price ? "flex" : "none"}>Sale</OnSaleBadge>
                </CardHeader>

                <CardFooter>
                  <Box mb="8px">
                    <h2>{product.title}</h2>
                    {starRating(product.rating, "18px")}
                  </Box>

                  {calcDiscount(product.price, product.discountedPrice)}

                  <ButtonContainer>
                    <Button
                      primary
                      minWidth="unset"
                      onClick={(e) => {
                        e.preventDefault();
                        incrementCartQuantity(product.id, product.title, product.imageUrl, product.price, product.discountedPrice);
                        productAdded(product.title);
                      }}>
                      <IconCartOutline
                        width="32px"
                        height="32px"
                      />
                    </Button>
                  </ButtonContainer>
                </CardFooter>
              </ProductCard>
            </Link>
          </li>
        ))}
      </ProductsListContainer>
    </>
  );
}
