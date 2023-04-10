export type Movie = {
  id?: number;
  name: string;
  streaming: string;
  gender: string;
  status: "A assistir" | "Assistido";
  note?: number;
  summary?: string;
};

export type MovieUpdate = {
  status: "A assistir" | "Assistido";
  note?: number;
  summary?: string;
};
