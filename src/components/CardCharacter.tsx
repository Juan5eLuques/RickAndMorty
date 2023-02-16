import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CharacterCardType } from "../types/Character";
import { Link } from "react-router-dom";

const handleClickCharacter = () => {};

export const CardCharacter: React.FC<CharacterCardType> = ({
  id,
  image,
  name,
  species,
  height,
  width,
  gender,
  status,
}: CharacterCardType) => {
  return (
    <Card
      sx={{
        width: { width },
        border: 1,
        padding: "20px",
      }}
      onClick={handleClickCharacter}
    >
      <CardMedia sx={{ height: { height } }} image={image} title={name} />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {name}
        </Typography>
        <Typography
          variant="h6"
          color="#457b9d"
          textAlign={"center"}
          fontWeight={"bold"}
          fontSize={"25px"}
        >
          {species}
        </Typography>
      </CardContent>
      <CardActions
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link to={`/character/${id}`}>
          <Button size="large">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
