export interface IAction {
  type: string;
  payload: unknown;
}

const createAction = (type: string) => {
  return (payload: unknown): IAction => {
    return { type, payload };
  };
};

export default createAction;
