import { filmsBase } from "../consts/films-data";
import {
  DEFAULT_GENRES,
  DEFAULT_QUESTIONS_VALUE,
  DEFAULT_SORTS,
} from "../consts/filters-consts";
import { getFavoriteList } from "../helpers/favorite-list";
import isAuth from "../helpers/is-auth";
import { getWatchLaterList } from "../helpers/watch-later-list";
import IStore from "../interfaces/i-store";
import { DEFAULT_MODAL_VALUE, DEFAULT_PAGE } from "./consts";

const DEFAULT_STATE: IStore = {
  pageNumber: DEFAULT_PAGE,
  sorts: DEFAULT_SORTS,
  genres: DEFAULT_GENRES,
  filmsList: filmsBase,
  auth: isAuth(),
  modal: DEFAULT_MODAL_VALUE,
  favoriteList: getFavoriteList(),
  watchList: getWatchLaterList(),
  searchQuestions: DEFAULT_QUESTIONS_VALUE,
};

export default DEFAULT_STATE;
