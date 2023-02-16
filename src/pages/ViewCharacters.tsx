import React from "react";
import { useNavigate } from "react-router-dom";
import { CharacterList } from "../components/CharacterList";
import { PaginationComponent } from "../components/Pagination";
import SearchContextProvider from "../context/searchContext";
import { useCharacter } from "../hooks/useCharacters";

export const ViewCharacters: React.FC = () => {
  const { character, setCurrentPage, pagesOfSearch, currentPage } =
    useCharacter();

  const navigate = useNavigate();

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    event.preventDefault();
    setCurrentPage(value);
    navigate(`?page=${value}`);
  };

  return (
    <div>
      <SearchContextProvider>
        <CharacterList character={character} />
        <PaginationComponent
          currentPage={currentPage}
          handleChange={handleChangePage}
          pagesOfSearch={pagesOfSearch}
        />
      </SearchContextProvider>
    </div>
  );
};
