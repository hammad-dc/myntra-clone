import { createSlice} from "@reduxjs/toolkit"
import itemsSlice from "./ItemsSlice";

const fetchStatusSlice = createSlice({
  name: 'fetch',
  initialState: {
    fetchDone: false, //false = 'PENDING' and True = 'DONE'
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
    }
  } 

});

export const fetchStatusActions = fetchStatusSlice.actions;

export default fetchStatusSlice;
