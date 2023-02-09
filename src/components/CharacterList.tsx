import React, { useState } from "react";
import { useCharacter } from "../hooks/useCharacters";
import { Character } from "../types/Character";

type PropsList = {
  page: number;
};

export const CharacterList = ({ page }: PropsList) => {
  const { character } = useCharacter(page);

  return (
    <div>
      {" "}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)" }}>
        {character.map((item: Character) => (
          <div key={item.id}>
            <img src={item.image}></img>
            <h2>{item.name}</h2>
            <p>{item.gender}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
