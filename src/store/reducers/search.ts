import { Reducer } from "redux";
import { DEFAULT_QUESTIONS_VALUE, TypeSort } from "../../consts/filters-consts";

interface ISearchState {
  searchQuestions: ISearchQusetions;
}

export interface ISearchQusetions {
  [index: string]: TypeSort | undefined;
  popularity?: TypeSort;
  vote?: TypeSort;
}

const inintialState = {
  searchQuestions: DEFAULT_QUESTIONS_VALUE,
};

const searchReducer: Reducer<ISearchState> = (
  state = inintialState,
  action
) => {
  switch (action.type) {
    case "RESET_QUESTIONS":
      return { searchQuestions: {} };
    case "CHANGE_QUESTIONS":
      return {
        ...state,
        searchQuestions: { ...state.searchQuestions, ...action.payload },
      };
    default:
      return state;
  }
};

export default searchReducer;
