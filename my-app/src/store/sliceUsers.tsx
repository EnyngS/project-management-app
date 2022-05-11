import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

interface initialStateType {
  user: { id: string; name: string; login: string };
}

const initialState: initialStateType = {
  user: { id: '40af606c-c0bb-47d1-bc20-a2857242cde3', name: 'Vlad', login: 'user002' },
};
export const getUsers = createAsyncThunk('all/fetchAll', async function () {
  const response = await fetch(`http://127.0.0.1:4000`, {
    mode: 'no-cors',
  });
  const data: any = await response.json();
  const respons = {
    id: '40af606c-c0bb-47d1-bc20-a2857242cde3',
    name: 'Vasya',
    login: 'user001',
  };
  return respons;
});

const sliceUsers = createSlice({
  name: 'all',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

// export const { getAll } = sliceBoards.actions;
export default sliceUsers.reducer;
