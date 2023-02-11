import { useParams } from "react-router-dom";
import { CardCharacter } from "../components/CardCharacter";
import { useGetCharacter } from "../hooks/useGetCharacter";

export const DescriptionCharacter = () => {
  const { id } = useParams();
  const idCharacter = parseInt(id || "1");
  const { character } = useGetCharacter(idCharacter);
  return (
    <div>
      <CardCharacter
        id={character?.id}
        name={character?.name}
        gender={character?.gender}
        image={character?.image}
        species={character?.species}
        status={character?.status}
        width={350}
        height={550}
      ></CardCharacter>
    </div>
  );
};
