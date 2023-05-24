import IFilm from "./i-film";

export default interface IQuestion {
  name: string;
  method: (list: IFilm[]) => IFilm[];
}
