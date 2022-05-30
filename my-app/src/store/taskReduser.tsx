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
		},
		setDeleteTask: (state:any, action:any) => {
			state.columns[action.payload.index].task = state.columns[action.payload.index].task.filter((el:any)=> el.id !== action.payload.taskId)
		},
		setCreateTask: (state:any, action:any) => {
			console.log(action.payload.index)
			state.columns[action.payload.index].task = action.payload.task
		},
		setBack: (state:any, action)=> {
			state = initialState
		}
	},
});

export const { setBoardID,setCell,getAllTask,setDeleteTask,setCreateTask,setBack} = taskReduser.actions;
export default taskReduser.reducer;
