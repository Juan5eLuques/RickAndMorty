import { QueryParams } from "./../types/QueryParams";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Character } from "../types/Character";

let API_URL = "https://rickandmortyapi.com/api/character/";

export const useCharacter = () => {
  const [character, setCharacter] = useState<Character[]>([]);
  const [pagesOfSearch, setPagesOfSearch] = useState<number>(42);
  const [currentPage, setCurrentPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    API_URL = "https://rickandmortyapi.com/api/character/";

    const params: Array<QueryParams> = [];
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      params.push({ key: param, value: value });
    }

    if (params.length !== 0) {
      params.map((item, index) => {
        if (index === 0) API_URL += `?${item.key}=${item.value}`;
        else API_URL += `&${item.key}=${item.value}`;
      });
    }
    const reqAPI = fetch(API_URL)
      .then((res) => res.json())
      .then((res) => {
        const { results } = res;
        const { pages } = res.info;
        setPagesOfSearch(pages);
        setCharacter(results);
      });
  }, [currentPage, searchParams]);

  return {
    character,
    pagesOfSearch,
    setCurrentPage,
    currentPage,
    handleChangePage,
    setSearchParams,
  };
};
