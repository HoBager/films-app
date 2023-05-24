import { filmsBase } from "../../consts/films-data";
import { DEFAULT_GENRES, DEFAULT_SORTS } from "../../consts/filters-consts";
import { Reducer } from "redux";
import IFilm from "../../interfaces/i-film";

interface ISorts {
  type: string;
  date: string;
}

interface IFilterReducer {
  sorts: ISorts;
  genres: number[];
  filmsList: IFilm[];
}

const inintialState: IFilterReducer = {
  sorts: DEFAULT_SORTS,
  genres: DEFAULT_GENRES,
  filmsList: filmsBase,
};

const filtersReducer: Reducer<IFilterReducer> = (
  state = inintialState,
  action
) => {
  switch (action.type) {
    case "CHANGE_TYPE_SORT":
      return { ...state, sorts: { ...state.sorts, type: action.payload } };
    case "CHANGE_DATE_SORT":
      return { ...state, sorts: { ...state.sorts, date: action.payload } };
    case "CHANGE_GENRES":
      return {
        ...state,
        genres: state.genres.includes(action.payload as number)
          ? state.genres.filter((genre: number) => genre !== action.payload)
          : [...state.genres, action.payload],
      };
    case "CHANGE_FILMS_LIST":
      return { ...state, filmsList: action.payload };
    case "RESET_FILTERS":
      return {
        ...state,
        sorts: DEFAULT_SORTS,
        genres: DEFAULT_GENRES,
        searchQuestions: {},
      };
    default:
      return state;
  }
};

export default filtersReducer;
