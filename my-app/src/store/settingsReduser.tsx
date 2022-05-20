import { createSlice } from '@reduxjs/toolkit';
import { CounterState } from './type/setReduser';

const initialState: CounterState = {
	lang: 'ru',
	developers: [
		{ id: 1, mentor: true, name: 'Lyssenko Alex', url: { git: 'https://github.com/LyssenkoAlex' } },
		{ id: 2, name: 'Vladislav', url: { git: 'https://github.com/EnyngS' } },
		{ id: 3, name: 'Miculich Fiodar', url: { git: 'https://github.com/Mikulich-Fedor' } },
	],
};

const settingsReduser = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    language: (state, actions) => {
      state.lang = actions.payload.lang
    },
  },
});

export const { language } = settingsReduser.actions;
export default settingsReduser.reducer;
