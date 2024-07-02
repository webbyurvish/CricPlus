import { createSlice } from "@reduxjs/toolkit";

export interface DataState {
  matches: number;
  runs: number;
  wickets: number;
  extras: number;
  overs: Array<Array<string>>;
  balls: number;
  fours: number;
  overNumber: number;
  innings: number;
  wides: number;
  activeTab: string;
}

const initialState: DataState = {
  matches: 0,
  runs: 0,
  wickets: 0,
  extras: 0,
  overs: [],
  balls: 0,
  fours: 0,
  overNumber: 1,
  innings: 1,
  wides: 0,
  activeTab: "scorecard",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setMatches: (state, action) => {
      state.matches = action.payload;
    },
    addWicket: (state) => {
      state.wickets += 1;
      if (state.overNumber == 21 || state.wickets == 10) {
        state.innings += 1;
      }
    },
    addWide: (state) => {
      state.wides += 1;
      state.runs += 1;
      if (!state.overs[state.overNumber - 1]) {
        state.overs.push([]);
      }
      state.overs[state.overNumber - 1].push("Wide");
    },
    addNoBall: (state) => {
      state.runs += 1;
      if (!state.overs[state.overNumber - 1]) {
        state.overs.push([]);
      }
      state.overs[state.overNumber - 1].push("No Ball");
    },
    addRuns: (state, action) => {
      state.runs += action.payload;
      state.balls += 1;
      if (!state.overs[state.overNumber - 1]) {
        state.overs.push([]);
      }
      state.overs[state.overNumber - 1].push(action.payload.toString());
      if (state.balls == 6) {
        state.balls = 0;
        state.overNumber += 1;
      }
      console.log(state.overNumber, state.wickets);

      if (state.overNumber == 21 || state.wickets == 10) {
        state.innings += 1;
      }
      if (action.payload == 4) {
        state.fours += 1;
      }
    },
    reset: (state) => {
      state.runs = 0;
      state.wickets = 0;
      state.overNumber = 1;
      state.overs = [];
      state.extras = 0;
      state.matches = 0;
      state.balls = 0;
      state.fours = 0;
      state.innings = 1;
    },
    addExtras: (state, action) => {
      state.extras += action.payload;
    },
    addOvers: (state, action) => {
      state.overs += action.payload;
    },
    addBalls: (state, action) => {
      state.balls += action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
  },
});

export const {
  setMatches,
  addWicket,
  addRuns,
  addExtras,
  addOvers,
  addBalls,
  reset,
  addWide,
  addNoBall,
  setActiveTab,
} = dataSlice.actions;

export default dataSlice.reducer;
