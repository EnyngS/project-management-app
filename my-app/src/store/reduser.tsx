import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
export type develpersType = {
  id: number;
  mentor?: true;
  name: string;
  url: {
    git: string;
  };
};
interface CounterState {
  developers: develpersType[];
}

const initialState: CounterState = {
  developers: [
    { id: 1, mentor: true, name: 'Lyssenko Alex', url: { git: 'https://github.com/LyssenkoAlex' } },
    { id: 2, name: 'Vladislav', url: { git: 'https://github.com/EnyngS' } },
    { id: 3, name: 'Miculich Fiodar', url: { git: 'https://github.com/Mikulich-Fedor' } },
  ],
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    addNewUser: (state, actions) => {
      console.log(state);
    },
  },
});

export const { addNewUser } = mainSlice.actions;
export default mainSlice.reducer;
