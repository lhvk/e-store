import { useEffect, useState } from "react";

// Custom media query hook
// Credits: https://juhanajauhiainen.com/posts/how-to-implement-usemediaquery-hook-in-react

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const matchQueryList = window.matchMedia(query);
    function handleChange(e) {
      setMatches(e.matches);
    }
    matchQueryList.addEventListener("change", handleChange);

    return () => {
      matchQueryList.removeEventListener("change", handleChange);
    };
  }, [query]);
  return matches;
}
