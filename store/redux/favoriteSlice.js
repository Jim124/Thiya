import { createSlice } from '@reduxjs/toolkit';

const initialState = { ids: [] };
const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: initialState,
  reducers: {
    addFavorite: (state, action) => {
      //state.ids.push(action.payload.id);
      [...state.ids, action.payload.id];
    },
    removeFavorite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
      //state.ids = state.ids.filter((id) => id !== action.id);
      state.ids.filter((id) => id !== action.id);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
