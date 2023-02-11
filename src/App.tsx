import { Route, Routes } from "react-router-dom";
import { CharacterPage } from "./components/CharacterPage";
import { DescriptionCharacter } from "./pages/DescriptionCharacter";
import { ViewCharacters } from "./pages/ViewCharacters";

function App() {
  return (
    <div className="App">
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
