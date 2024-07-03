import { createSlice } from "@reduxjs/toolkit";
import { Match } from "../../commons/interfaces";

export interface MatchSliceState {
  matches: Array<Match>;
}

const initialState: MatchSliceState = {
  matches: [],
};

const matchSlice = createSlice({
  name: "match",
  initialState,
  reducers: {
    addMatch: (state, action) => {
      state.matches.push(action.payload);
    },
  },
});

export const { addMatch } = matchSlice.actions;

export default matchSlice.reducer;
