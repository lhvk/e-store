import { useParams } from "react-router-dom";

export function ProductPage() {
  let params = useParams();
  return (
    <div>
      <h1>This is the product page</h1>
      <p>Individual product: {params.id}</p>
    </div>
  );
}
