import { Reducer } from "redux";
import { DEFAULT_STORAGE_VALUE } from "../../consts/consts";

interface IUsersListReducer {
  favoriteList: string[];
  watchList: string[];
}

const inintialState = {
  favoriteList: DEFAULT_STORAGE_VALUE,
  watchList: DEFAULT_STORAGE_VALUE,
};

const userListsReducer: Reducer<IUsersListReducer> = (
  state = inintialState,
  action
) => {
  switch (action.type) {
    case "CHANGE_FAVORITE_LIST":
      return {
        ...state,
        favoriteList: state.favoriteList.includes(action.payload as string)
          ? state.favoriteList.filter(
              (title: string) => title !== action.payload
            )
          : [...state.favoriteList, action.payload],
      };
    case "CHANGE_WATCH_LIST":
      return {
        ...state,
        watchList: state.watchList.includes(action.payload as string)
          ? state.watchList.filter((title: string) => title !== action.payload)
          : [...state.watchList, action.payload],
      };
    case "RESET_USERS_LISTS":
      return {
        ...state,
        favoriteList: DEFAULT_STORAGE_VALUE,
        watchList: DEFAULT_STORAGE_VALUE,
      };
    default:
      return state;
  }
};

export default userListsReducer;
