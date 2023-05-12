import { Flex } from "../../components/Flex";
import { Loader } from "../../components/Loader";
import { useProductFetch } from "../../hooks/useFetch";

export function ProductPage() {
  const { data: product, isLoading, isError } = useProductFetch();

  if (isLoading || !product) {
    return <Loader />;
  }

  if (isError) {
    return <Flex alignItems="center">An error occured..</Flex>;
  }
  console.log("product", product);
  return (
    <Flex flexDirection="column" alignItems="center" w="100%">
      <h1>{product.title}</h1>
      <p>Individual product: {product.description} </p>
    </Flex>
  );
}
