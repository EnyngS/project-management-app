import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
// import counterReducer, { initialState } from './slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import mainSlice from './reduser';

const store = configureStore({ reducer: mainSlice });
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<any> = useSelector;

export default store;
