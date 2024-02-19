import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const initialState = {
  lockedUI: false,
};

export const metaSlice = createSlice({
  name: 'meta',
  initialState: initialState,
  reducers: {
    setLockedUI: (state, action) => {
      state.lockedUI = action.payload;
    },
  }
});

export const selectLockedUI = (state: RootState) => state.meta.lockedUI;

export const { setLockedUI } = metaSlice.actions;

export default metaSlice.reducer;