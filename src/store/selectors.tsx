import { createSelector } from "reselect";
import {
  DEFAULT_SORT_METHOD,
  ISort,
  SORT_TYPES,
  TypeSort,
} from "../consts/filters-consts";
import { filmsBase } from "../consts/films-data";
import { sortByGeneres, sortByDate, sortByQuestions } from "../helpers/sorts";
import { IRootState } from ".";

export const selectStore = (state: IRootState) => state;
export const selectGenres = (state: IRootState) => state.filtersReducer.genres;
export const selectSorts = (state: IRootState) => state.filtersReducer.sorts;
export const selectFavoriteList = (state: IRootState) =>
  state.userListsReducer.favoriteList;
export const selectWatchList = (state: IRootState) =>
  state.userListsReducer.watchList;
export const selectAuth = (state: IRootState) =>
  state.authtorizationReducer.auth;
export const selectPageNumber = (state: IRootState) =>
  state.paginatoinReducer.pageNumber;
export const selectSearchQuestions = (state: IRootState) =>
  state.searchReducer.searchQuestions;
export const selectFilms = (state: IRootState) =>
  state.filtersReducer.filmsList;
export const selectModal = (state: IRootState) => state.modalReducer.modal;

export const selectCardFilm = createSelector(
  [selectAuth, selectFavoriteList, selectWatchList],
  (auth, favoriteList, watchList) =>{ 
    return {auth, favoriteList, watchList} 
  }
);

export const selectSearchPageFilms = createSelector(
  [selectGenres, selectFilms, selectSearchQuestions],
  (genres, filmsList, searchQuestions) => {
    const sortedByGenres = sortByGeneres(filmsList, genres);
    const sortedByQuestions = sortByQuestions(sortedByGenres, searchQuestions);

    return sortedByQuestions;
  }
);

export const selectMainPageFilms = createSelector(
  [selectGenres, selectSorts, selectFavoriteList, selectWatchList],
  (genres, sorts, favoriteList, watchList) => {
    const method = SORT_TYPES.reduce((method: TypeSort, type: ISort) => {
      if (type.name === sorts.type) {
        return type.method;
      }
      return method;
    }, DEFAULT_SORT_METHOD);

    const sortedByMethod = method(filmsBase, [favoriteList, watchList]);

    const sortedByYear = Boolean(sorts.date)
      ? sortByDate(sortedByMethod, sorts.date)
      : sortedByMethod;
    const sortedByGenres = Boolean(genres.length)
      ? sortByGeneres(sortedByYear, genres)
      : sortedByYear;

    return sortedByGenres;
  }
);

export const makeSelectCurrentFilm = () => {
  return createSelector(
    selectFavoriteList,
    selectWatchList,
    (_: IRootState, filmName: string) => filmName,
    (favoriteList, watchList, filmName) => {
      return {
        favorite: favoriteList.includes(filmName),
        watchLater: watchList.includes(filmName),
      };
    }
  );
};

export const selectPage = createSelector(
  selectFilms,
  selectPageNumber,
  (filmsList, pageNumber) => {
    return { filmsList, pageNumber };
  }
);

export const selectFiltersDeps = createSelector(
  [selectGenres, selectSorts, selectFavoriteList, selectWatchList],
  (genres, sorts, favoriteList, watchList) => {
    return {
      genres,
      sorts,
      favoriteList,
      watchList,
    };
  }
);
