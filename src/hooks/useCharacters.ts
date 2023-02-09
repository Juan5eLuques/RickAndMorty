import { useEffect, useState } from "react";

export const useCharacter = (page: number) => {
  const [character, setCharacter] = useState([]);
  const API_URL = "https://rickandmortyapi.com/api/character";
  const newURLPage = `${API_URL}/?page=${page}`;

  useEffect(() => {
    const reqAPI = fetch(newURLPage)
      .then((res) => res.json())
      .then((res) => {
        const { results } = res;
        setCharacter(results);
      });
  }, [page]);

  return { character };
};
