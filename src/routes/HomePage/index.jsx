import { Box, Button, Flex, Hero, Loader } from "../../components";
import { Helmet } from "react-helmet-async";
import { useProductsFetch } from "../../hooks";
import { ProductsListContainer, ProductCard, CardHeader, CardImage, OnSaleBadge, CardFooter, ButtonContainer, SearchBar } from "./index.styles";
import { Link } from "react-router-dom";
import { calcDiscount, productAdded, starRating } from "../../utils";
import { IconCartOutline } from "../../assets/svg";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { useState } from "react";
import { useEffect } from "react";

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const { incrementCartQuantity } = useShoppingCart();
  const { data, isLoading, isError } = useProductsFetch("https://api.noroff.dev/api/v1/online-shop");

  useEffect(() => {
    setSearchResults(data);
  }, [data]);

  if (isLoading || !data) {
    return <Loader />;
  }

  if (isError) {
    return <Flex justifyContent="center">An error occured..</Flex>;
  }

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Perform search logic
    const results = performSearch(query);

    // Update search results
    setSearchResults(results);
  };

  const performSearch = (query) => {
    // Filter the data based on the query
    const results = data.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));

    return results;
  };

  return (
    <>
      <Helmet>
        <title>E-store | Home</title>
      </Helmet>
      <Hero />
      <main>
        <section>
          <Flex>
            <SearchBar
              type="search"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search"
            />
          </Flex>

          <ProductsListContainer>
            {searchResults.map((product) => (
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
        </section>
      </main>
    </>
  );
}
