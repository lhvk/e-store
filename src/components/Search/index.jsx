import { useState } from "react";
import { SearchBar } from "./index.styles";

export function Search({ data, setSearchResults }) {
  const [searchQuery, setSearchQuery] = useState("");

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
    const results = data.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );

    return results;
  };

  return (
    <SearchBar
      type="search"
      value={searchQuery}
      onChange={handleSearch}
      placeholder="Search"
    />
  );
}
