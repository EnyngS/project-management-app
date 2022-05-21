import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

export type BoardPrevType = { id?: string; title: string; description: string };

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

export const PostBoards = createAsyncThunk('boadrs/PostBoards', async function (e: BoardPrevType) {
  const response = await fetch(`https://quiet-bastion-49623.herokuapp.com/boards`, {
    method: 'POST',
    body: JSON.stringify(e),
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  });
});
export const deleteBoard = createAsyncThunk(
  'boadrs/deleteBoard',
  async function (id: string | undefined) {
    const response = fetch(`https://quiet-bastion-49623.herokuapp.com/boards/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }
);

export const GetAllBoards = createAsyncThunk('boadrs/GetAllBoards', async function () {
  const response = await fetch(`https://quiet-bastion-49623.herokuapp.com/boards`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  });
  const data: BoardPrevType[] = await response.json();
  return data;
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

export default sliceBoards.reducer;
