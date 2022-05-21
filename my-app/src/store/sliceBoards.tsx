import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export type BoardPrevType = { id: string; title: string; description: string };

export const BoardPrev: BoardPrevType[] = [
  {
    id: '9a111e19-24ec-43e1-b8c4-13776842b8d5',
    title: 'Homework tasks',
    description: 'My board tasks',
  },
  {
    id: '9a111e19-24ec-43e1-b8c4-13776842b8d3',
    title: 'Homework tasks',
    description: 'My board tasks',
  },
  {
    id: '9a111e19-24ec-43e1-b8c4-13776842b8d4',
    title: 'Homework tasks',
    description: 'My board tasks',
  },
];
const initialState = {
  boards: BoardPrev,
};
// -----когда будет авторизация
// export const PostBoards = createAsyncThunk('boadrs/PostBoards', async function (e: BoardPrevType) {
//   const response = await fetch(`https://quiet-bastion-49623.herokuapp.com/boards`, {
//     method: 'POST', // или 'PUT'
//     body: JSON.stringify(e), // данные могут быть 'строкой' или {объектом}!
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   });
// });
// ----------------------------
export const GetAllBoards = createAsyncThunk('boadrs/GetAllBoards', async function () {
  const response = await fetch(`https://quiet-bastion-49623.herokuapp.com/boards`, {
    method: 'GET', // или 'PUT'
  });
  const data: BoardPrevType[] = await response.json();
  //   return data;
  return BoardPrev;
});

const sliceBoards = createSlice({
  name: 'boards',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetAllBoards.fulfilled, (state, action) => {
      state.boards = action.payload;
    });
  },
});

// export const { getAll } = sliceBoards.actions;
export default sliceBoards.reducer;
