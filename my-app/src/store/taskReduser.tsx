import { createSlice } from '@reduxjs/toolkit';
import { CurentBoard } from './type/taskReduser';

const initialState:CurentBoard = {
	boardID : '',
	columns: [ {
		title: 'work',
		id: '',
		task: [],

	},{
		title: 'working',
		id: '',
		task: []
	},{
		title: 'done',
		id: '',
		task: []
	},]
};

const taskReduser = createSlice({
	name: 'taskReduser',
	initialState,
	reducers: {
		setBoardID: (state, action) => {
			state.boardID = action.payload;
		},
		setCell: (state, action) => {
			state.columns[action.payload.order -1].id = action.payload.id
		},
		getAllTask: (state, action) => {
			let id = action.payload[1]
			let task = action.payload[0]
			state.columns[id].task = task;
		}
	},
});

export const { setBoardID,setCell,getAllTask} = taskReduser.actions;
export default taskReduser.reducer;
