import { useEffect, useState } from "react";
import { Character } from "../types/Character";
export const useGetCharacter = (id: number | undefined) => {
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    const API_URL = `https://rickandmortyapi.com/api/character/${id}`;
    const newCharacter = fetch(API_URL)
      .then((res) => res.json())
      .then((res) => setCharacter(res));
  }, [id]);

  return { character };
};
