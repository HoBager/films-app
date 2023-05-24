import { Reducer } from "redux";
import { DEFAULT_PAGE } from "../../consts/consts";

interface IPaginationState {
  pageNumber: number;
}

const inintialState = {
  pageNumber: DEFAULT_PAGE,
};

const paginatoinReducer: Reducer<IPaginationState> = (
  state = inintialState,
  action
) => {
  switch (action.type) {
    case "CHANGE_PAGE":
      return { ...state, pageNumber: action.payload };
    default:
      return state;
  }
};

export default paginatoinReducer;
