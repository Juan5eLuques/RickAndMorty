import { createContext, ReactNode, SetStateAction, useState } from "react";

type Props = {
  children: ReactNode;
};

type ContextProps = {
  searchContext: string;
  setSearchContext: React.Dispatch<SetStateAction<string>>;
};

export const Context = createContext<ContextProps>({
  searchContext: "",
  setSearchContext: () => {},
});

const SearchContextProvider = ({ children }: Props) => {
  const [searchContext, setSearchContext] = useState<string>("");

  return (
    <Context.Provider value={{ searchContext, setSearchContext }}>
      {children}
    </Context.Provider>
  );
};

export default SearchContextProvider;
