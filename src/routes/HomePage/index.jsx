import { Flex, Hero, Loader, ProductCard, Search } from "../../components";
import { Helmet } from "react-helmet-async";
import { useProductsFetch } from "../../hooks";
import { ProductsListContainer } from "./index.styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export function HomePage() {
  const [searchResults, setSearchResults] = useState([]);
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

  return (
    <>
      <Helmet>
        <title>E-store | Home</title>
      </Helmet>
      <Hero />
      <main>
        <section>
          <Flex>
            <Search
              data={data}
              setSearchResults={setSearchResults}
            />
          </Flex>

          <ProductsListContainer>
            {searchResults.map((product) => (
              <li key={product.id}>
                <Link to={`product/${product.id}`}>
                  <ProductCard data={product} />
                </Link>
              </li>
            ))}
          </ProductsListContainer>
        </section>
      </main>
    </>
  );
}
