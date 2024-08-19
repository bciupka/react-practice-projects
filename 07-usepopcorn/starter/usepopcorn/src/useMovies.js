import { useState, useEffect } from "react";

const KEY = "f84fc31d";

export function useMovies(query) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(
    function () {
      const controller = new AbortController();

      async function fetchMovies() {
        try {
          setErrorMessage("");
          setIsLoading(true);
          const response = await fetch(
            `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!response.ok) {
            throw new Error("Could not fetch movies");
          }
          const data = await response.json();
          if (data.Response === "False") {
            throw new Error("No movies found");
          }
          setMovies(data.Search);
        } catch (err) {
          if (err.name !== "AbortError") {
            setMovies([]);
            setErrorMessage(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length < 4) {
        setMovies([]);
        setErrorMessage("");
        return;
      }
      fetchMovies();
      // handleCloseMovie();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { isLoading, errorMessage, movies };
}
