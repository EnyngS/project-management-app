import { configureStore, Action } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
// import counterReducer, { initialState } from './slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import mainSlice from './reduser';
import sliceBoards from './sliceBoards';
import sliceUsers from './sliceUsers';

const store = configureStore({ reducer: { mainSlice, sliceBoards, sliceUsers } });
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<any> = useSelector;

export default store;
