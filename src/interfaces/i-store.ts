import { ReactElement } from "react";
import IFilm from "./i-film";
import IQuestion from "./i-question";

export default interface IStore {
  pageNumber: number;
  sorts: { type: string; date: string };
  genres: number[];
  filmsList: IFilm[];
  auth: boolean;
  modal: ReactElement | null;
  favoriteList: string[];
  watchList: string[];
  searchQuestions: IQuestion[];
}
