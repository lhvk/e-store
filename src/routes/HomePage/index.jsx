import React, { useState } from "react";
import { Box, Button, Flex, Hero, Loader } from "../../components";
import { Helmet } from "react-helmet-async";
import { useMediaQuery, useProductsFetch } from "../../hooks";
import { ProductsListContainer, ProductCard, CardHeader, CardImage, OnSaleBadge, CardFooter, ButtonContainer } from "./index.styles";
import { Link } from "react-router-dom";
import { calcDiscount, starRating } from "../../utils";
import { IconCartOutline } from "../../assets/svg";

export function HomePage() {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const isLargeScreen = useMediaQuery("(min-width: 1920px");

  console.log(cart);
  console.log(total);

  const { data: products, isLoading, isError } = useProductsFetch("https://api.noroff.dev/api/v1/online-shop");

  function addToCart(product) {
    setCart((current) => [...current, product.title]);
    setTotal((current) => current + product.price);
  }

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
      <ProductsListContainer
        id="product-list-container"
        margin={isLargeScreen ? "50px 0" : "50px"}>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`product/${p.id}`}>
              <ProductCard>
                <CardHeader>
                  <CardImage
                    className="card-img"
                    src={p.imageUrl}
                  />
                  <OnSaleBadge display={p.discountedPrice < p.price ? "flex" : "none"}>Sale</OnSaleBadge>
                </CardHeader>

                <CardFooter>
                  <Box mb="8px">
                    <h2>{p.title}</h2>
                    {starRating(p.rating, "18px")}
                  </Box>

                  {calcDiscount(p.price, p.discountedPrice)}

                  <ButtonContainer>
                    <Button
                      primary
                      minWidth="unset"
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(p);
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
