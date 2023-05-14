import { Helmet } from "react-helmet-async";

export function RouteNotFound() {
  return (
    <>
      <Helmet>
        <title>Error | Route not found</title>
      </Helmet>
      <div>
        <h1 style={{ textAlign: "center" }}>{"404: Route not found :("}</h1>
      </div>
    </>
  );
}
