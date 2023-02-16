import { createContext, ReactNode, useState } from "react";

const Context = createContext({});

type Props = {
  children: ReactNode;
};

export const SearchContextProvider = ({ children }: Props) => {
  const [searchContext, setSearchContext] = useState<string>("");

  return (
    <Context.Provider value={{ searchContext, setSearchContext }}>
      {children}
    </Context.Provider>
  );
};

export default SearchContextProvider;
