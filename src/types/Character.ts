export type Character = {
  id: number | undefined;
  name: string | undefined;
  image: string | undefined;
  gender: string | undefined;
  species: string | undefined;
  status: string | undefined;
};

export type CharacterCardType = Character & {
  width: number;
  height: number;
};

export type CharacterLocation = {
  name: string;
  locationInfoURL: string;
};
