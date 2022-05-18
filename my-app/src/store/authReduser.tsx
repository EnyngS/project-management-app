import { createSlice } from '@reduxjs/toolkit';

type Iuser = {
	isAuth: boolean,
	id: string,
	username: string,
	login: string,
	email: string,
	password: string,
	token: string,
};
interface CounterState {
	user: Iuser
}

const initialState: CounterState = {
	user: {
		isAuth: false,
		id: '',
		username: '',
		login: '',
		email: '',
		password: '',
		token: '',
	}
	
};

const authReduser = createSlice({
  name: 'main',
  initialState,
  reducers: {
	signin: (state,actions) => {
		state.user.isAuth = actions.payload.isAuth
		state.user.id = actions.payload.id
		state.user.username = actions.payload.username
		state.user.login = actions.payload.login
		state.user.email = actions.payload.email
		state.user.password = actions.payload.password
		state.user.token = actions.payload.token
	},
	exit: (state, actions) => {
		state.user.isAuth = false
		state.user.id = ''
		state.user.username = ''
		state.user.login = ''
		state.user.email = ''
		state.user.password = ''
		state.user.token = ''
	}
  },

});

export const { signin, exit } = authReduser.actions;
export default authReduser.reducer;
