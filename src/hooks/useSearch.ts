import { useState } from "react";

export const useSearch = () => {
  const [search, setSearch] = useState<string>("");

  const handleChange = (value: string) => {
    setSearch(value);
  };

  return { search, handleChange };
};
