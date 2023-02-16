import { Pagination, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { PaginationType } from "../types/Pagination";

export const PaginationComponent: React.FC<PaginationType> = ({
  currentPage,
  handleChange,
  pagesOfSearch,
}: PaginationType) => {
  return (
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
          count={pagesOfSearch}
          variant="outlined"
          shape="rounded"
          page={currentPage}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};
