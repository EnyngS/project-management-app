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
  page: string;
}

const initialState: CounterState = {
  developers: [
    { id: 1, mentor: true, name: 'Lyssenko Alex', url: { git: 'https://github.com/LyssenkoAlex' } },
    { id: 2, name: 'Vladislav', url: { git: 'https://github.com/EnyngS' } },
    { id: 3, name: 'Miculich Fiodar', url: { git: 'https://github.com/Mikulich-Fedor' } },
  ],
  page: 'WelcomePage',
};

// export const fetchAll = createAsyncThunk(
//   'install/fetchItemsPag',
//   async function (e: React.ChangeEvent<HTMLSelectElement>) {
//     const response = await fetch(`http://127.0.0.1:4000/docs`);
//     const data: string = await response.json();
//     return data;
//   }
// );

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
