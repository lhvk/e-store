import { Helmet } from "react-helmet-async";
import { messages } from "../../messages";

export function RouteNotFound() {
  return (
    <>
      <Helmet>
        <title>Error | Route not found</title>
      </Helmet>
      <main>
        <div>
          <h1 style={{ textAlign: "center" }}>{messages.routeNotFound}</h1>
        </div>
      </main>
    </>
  );
}
