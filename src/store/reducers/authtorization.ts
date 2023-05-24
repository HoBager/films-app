import { Reducer } from "redux";

interface IAuthtorizationReducer {
  auth: boolean;
}

const inintialState: IAuthtorizationReducer = {
  auth: false,
};

const authtorizationReducer: Reducer<IAuthtorizationReducer> = (
  state = inintialState,
  action
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        auth: true,
      };
    case "LOGOUT":
      return {
        ...state,
        auth: false,
      };
    default:
      return state;
  }
};

export default authtorizationReducer;
