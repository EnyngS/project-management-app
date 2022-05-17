import { configureStore, Action, combineReducers } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
// import counterReducer, { initialState } from './slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import mainSlice from './reduser';
import authReduser from './authReduser'

const roodReducer = combineReducers({
	main: mainSlice,
	auth: authReduser,
 }) 

const store = configureStore({ reducer: roodReducer });

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<any> = useSelector;

export default store;
