import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FAVSLICEIF {
  favoriteIDs: number[];
}

const initialState: FAVSLICEIF = {
  favoriteIDs: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFav(state, action: PayloadAction<number>) {
      const index = state.favoriteIDs.indexOf(action.payload);
      console.log(action);
      if (index === -1) {
        console.log("iamhere");
        state.favoriteIDs.push(action.payload);
      } else {
        state.favoriteIDs.splice(index, 1);
      }
    },
  },
});

export const { toggleFav } = favoriteSlice.actions;
export default favoriteSlice.reducer;
