import { createSlice } from '@reduxjs/toolkit';

const initialSlice = { ids: [] };

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: initialSlice,
  reducers: {
    addFavorite: (state, action) => {
      // state.ids.push(action.payload.id);
      [...state.ids, action.payload.id];
    },
    removeFavorite: (state, action) => {
      // state.ids.splice(state.ids.indexOf(action.payload.id),1);
      state.ids.filter((id) => id !== action.payload.id);
    },
  },
});
export const { addFavorite, removeFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
