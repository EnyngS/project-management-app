import { configureStore, combineReducers } from '@reduxjs/toolkit';
import settingsReduser from './settingsReduser';
import authReduser from './authReduser'
import sliceBoards from './sliceBoards';
import { useDispatch } from 'react-redux';

const roodReducer = combineReducers({
	settings: settingsReduser,
	auth: authReduser,
	boart: sliceBoards,
 }) 

const store = configureStore({ reducer: roodReducer });

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;