import { createSelector } from "reselect";

import { INITIAL_STATE } from "./reducer";
const selectGlobalDomain = (state) => state.global || INITIAL_STATE;

const makeSelectGlobal = () => {
  createSelector(selectGlobalDomain, (global) => global);
};

export default makeSelectGlobal;
