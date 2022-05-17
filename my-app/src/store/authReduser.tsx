import { createSlice } from '@reduxjs/toolkit';

type Iuser = {
	isAuth: boolean,
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
		state.user.username = actions.payload.username
		state.user.login = actions.payload.login
		state.user.email = actions.payload.email
		state.user.password = actions.payload.password
		state.user.token = actions.payload.token
		console.log('log in прошел')
	},
	exit: (state, actions) => {
		state.user.isAuth = false
		state.user.username = ''
		state.user.login = ''
		state.user.email = ''
		state.user.password = ''
		state.user.token = ''
		console.log('exit')
	}
  },

});

export const { signin, exit } = authReduser.actions;
export default authReduser.reducer;
