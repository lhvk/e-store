import { Helmet } from "react-helmet-async";
import { ProductSection } from "./index.styles";
import { Flex, Loader, ProductSpecificCard } from "../../components";
import { useProductFetch } from "../../hooks";

export function ProductPage() {
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

      <main>
        <ProductSection>
          <ProductSpecificCard data={product} />
        </ProductSection>
      </main>
    </>
  );
}
