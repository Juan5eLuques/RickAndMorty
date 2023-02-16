import { Grid } from "@mui/material";
import { Character } from "../types/Character";
import { CardCharacter } from "./CardCharacter";

type PropsList = {
  character: Character[];
};

export const CharacterList: React.FC<PropsList> = ({
  character,
}: PropsList) => {
  return (
    <div>
      <Grid
        container
        spacing={1}
        gap={10}
        paddingTop={10}
        justifyContent={"center"}
        alignContent={"center"}
      >
        {character.map((item: Character) => (
          <CardCharacter
            key={item.id}
            gender={item.gender}
            species={item.species}
            status={item.status}
            name={item.name}
            id={item.id}
            image={item.image}
            width={250}
            height={250}
          />
        ))}
      </Grid>
    </div>
  );
};
