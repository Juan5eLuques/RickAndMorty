import { Button, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import { CharacterList } from "../components/CharacterList";
import { SearchBar } from "../components/Search";

export const ViewCharacters: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <div>
      {" "}
      <SearchBar></SearchBar>
      <CharacterList page={page} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "40px",
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={42}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handleChange}
          />
        </Stack>
      </div>
    </div>
  );
};
