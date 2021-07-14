import produce from "immer";

export const INITIAL_STATE = {};

const globalReducer = (state = INITIAL_STATE, action) => {
  try {
    if (!action.type) throw new Error("action type not provided");
    return produce(state, (draft) => {
      switch (action.type) {
        default:
          return draft;
      }
    });
  } catch (error) {
    console.log(error);
  }
};


export default globalReducer