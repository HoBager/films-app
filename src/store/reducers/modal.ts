import { ReactElement } from "react";
import { IAction } from "../../helpers/action-creator";
import { DEFAULT_MODAL_VALUE } from "../../consts/consts";
import { Reducer } from "redux";

interface IStateModal {
  modal: ReactElement | null;
}

const inintialState: IStateModal = {
  modal: DEFAULT_MODAL_VALUE,
};

const modalReducer: Reducer<IStateModal> = (state = inintialState, actoin) => {
  switch (actoin.type) {
    case "OPEN_MODAL":
      return { ...state, modal: actoin.payload };
    case "CLOSE_MODAL":
      return { ...state, modal: DEFAULT_MODAL_VALUE };
    default:
      return state;
  }
};

export default modalReducer;
