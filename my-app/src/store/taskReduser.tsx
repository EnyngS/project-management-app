import { createSlice } from '@reduxjs/toolkit';
import { CurentBoard } from './type/taskReduser';

const initialState:CurentBoard = {
	boardID : '',
	columns: ['work','working','done',]
};

const taskReduser = createSlice({
	name: 'taskReduser',
	initialState,
	reducers: {
	  setBoardID: (state, action) => {
		 state.boardID = action.payload;
	  }
	},
});

export const { setBoardID,} = taskReduser.actions;
export default taskReduser.reducer;
