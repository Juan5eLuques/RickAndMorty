import { Route, Routes } from "react-router-dom";
import { SearchBar } from "./components/Search";
import { SearchContextProvider } from "./context/searchContext";
import { DescriptionCharacter } from "./pages/DescriptionCharacter";
import { ViewCharacters } from "./pages/ViewCharacters";

function App() {
  return (
    <div className="App">
      <SearchBar></SearchBar>
      <Routes>
        <Route path="/" element={<ViewCharacters />}></Route>
        <Route path="/character">
          <Route path=":id" element={<DescriptionCharacter />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
