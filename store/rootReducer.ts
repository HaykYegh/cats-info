import { combineReducers } from '@reduxjs/toolkit';
import { catsSlice } from '@/modules/Cats/store/cats/slice';

const rootReducer = combineReducers({
  [catsSlice.name]: catsSlice.reducer,
});

export default rootReducer;
