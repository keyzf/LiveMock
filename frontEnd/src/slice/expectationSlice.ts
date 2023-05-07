import { ExpectationM } from "core/struct/expectation";
import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { matcherReducers } from "./matcherSlice";

export interface ExpectationState {
  expectationList: Array<ExpectationM>;
}

const expectationSlice = createSlice({
  name: "expectation",
  initialState: {
    expectationList: [],
  } as ExpectationState,
  reducers: {
    setExpectationList(state, action: PayloadAction<Array<ExpectationM>>) {
      state.expectationList = action.payload;
    },
    updateExpectationItem: (
      state,
      action: PayloadAction<{
        expectationIndex: number;
        modifyValues: Partial<ExpectationM>;
      }>
    ) => {
      const item = state.expectationList[action.payload.expectationIndex];
      Object.assign(item, action.payload.modifyValues);
    },
    ...matcherReducers,
  },
});

let { actions, caseReducers, getInitialState, name, reducer } =
  expectationSlice;

let {
  addMatcher,
  modifyMatcher,
  removeMatcher,
  setExpectationList,
  updateExpectationItem,
} = actions;
export {
  addMatcher,
  modifyMatcher,
  removeMatcher,
  setExpectationList,
  updateExpectationItem,
  reducer,
};
