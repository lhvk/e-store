import { Box, Flex, Hero, Loader, ProductCard, Search } from "../../components";
import { Helmet } from "react-helmet-async";
import { useProductsFetch } from "../../hooks";
import { ListItem, ProductsListContainer } from "./index.styles";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useEffect } from "react";

export function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
  const ref = useRef(null);
  const { data, isLoading, isError } = useProductsFetch(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  useEffect(() => {
    setSearchResults(data);
  }, [data]);

  if (isLoading || !data) {
    return <Loader />;
  }

  if (isError) {
    return <Flex justifyContent="center">An error occured..</Flex>;
  }

  function scrollToProducts() {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <Helmet>
        <title>E-store | Home</title>
      </Helmet>
      <Hero scrollToProducts={scrollToProducts} />
      <main>
        <section>
          <Box mb="10px">
            <h2 ref={ref}>Products</h2>
          </Box>

          <Flex>
            <Search
              data={data}
              setSearchResults={setSearchResults}
            />
          </Flex>

          <ProductsListContainer>
            {searchResults.map((product) => (
              <ListItem key={product.id}>
                <Link to={`product/${product.id}`}>
                  <ProductCard data={product} />
                </Link>
              </ListItem>
            ))}
          </ProductsListContainer>
        </section>
      </main>
    </>
  );
}
