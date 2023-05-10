import styled from "styled-components";
import { useFetch } from "../../api/useFetch";
import { Hero } from "../../components/Hero";
import { Link } from "react-router-dom";

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  min-height: 400px;
  max-width: 300px;
`;

const CardHeader = styled.img`
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  object-fit: contain;
`;

export function HomePage() {
  const url = "https://api.noroff.dev/api/v1/online-shop";
  const { data: products, isLoading, isError } = useFetch(url);

  console.log(products);

  return (
    <>
      <Hero />
      <section style={{ margin: "50px", display: "grid", gap: "20px" }}>
        {isLoading && <div>Loading..</div>}

        {isError && <div>An error occured..</div>}

        {!isLoading && !isError && (
          <>
            {products.map((p) => (
              <Link to="product/:id">
                <ProductCard>
                  <CardHeader src={p.imageUrl} />
                </ProductCard>
              </Link>
            ))}
          </>
        )}
      </section>
    </>
  );
}
