import { useProductsFetch } from "../../hooks/useFetch";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Hero } from "../../components/Layout/Hero";
import { Link } from "react-router-dom";
import { CardFooter, CardHeader, CardImage, OnSaleBadge, ProductCard, ProductsListContainer } from "./index.styles";
import { Flex } from "../../components/Flex";
import { Loader } from "../../components/Loader";

export function HomePage() {
  const isLargeScreen = useMediaQuery("(min-width: 1920px");
  const url = "https://api.noroff.dev/api/v1/online-shop";
  const { data: products, isLoading, isError } = useProductsFetch(url);

  if (isLoading || !products) {
    return <Loader />;
  }

  if (isError) {
    return <Flex justifyContent="center">An error occured..</Flex>;
  }

  return (
    <>
      <Hero />
      <ProductsListContainer id="product-list-container" margin={isLargeScreen ? "50px 0" : "50px"}>
        {products.map((p) => (
          <li key={p.id}>
            <Link to={`product/${p.id}`}>
              <ProductCard>
                <CardHeader>
                  <CardImage className="card-img" src={p.imageUrl} />
                  <OnSaleBadge display={p.discountedPrice < p.price ? "flex" : "none"}>Sale</OnSaleBadge>
                </CardHeader>

                <CardFooter>
                  <div className="footer-content">
                    <h2 className="card-title">{p.title}</h2>
                    <p>Price: ${p.price}</p>
                    {p.discountedPrice < p.price ? <p>Now: ${p.discountedPrice}</p> : ""}
                    <p>Rating: {p.rating}</p>
                    <p>Tags: {p.tags}</p>
                  </div>
                </CardFooter>
              </ProductCard>
            </Link>
          </li>
        ))}
      </ProductsListContainer>
    </>
  );
}
