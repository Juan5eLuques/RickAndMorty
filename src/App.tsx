import { useState } from "react";
import { CharacterList } from "./components/CharacterList";
import { useCharacter } from "./hooks/useCharacters";
import { Character } from "./types/Character";

function App() {
  const [page, setPage] = useState(1);
  return (
    <div className="App">
      <h1>Rick and morty app</h1>
      <CharacterList page={page} />
      <button onClick={() => setPage(page + 1)}> Next Page</button>
    </div>
  );
}

export default App;
