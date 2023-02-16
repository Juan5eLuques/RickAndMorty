import { Route, Routes } from "react-router-dom";
import { SearchBar } from "./components/Search";
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
          <Route path=":name" element={<ViewCharacters />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
