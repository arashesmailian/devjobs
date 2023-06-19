import {configureStore , combineReducers} from '@reduxjs/toolkit'
import ThemeSlice from '@redux/reducers/ThemeSlice'
import newJobSlice from '@redux/reducers/JobSlice';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  theme:ThemeSlice,
  jobs:newJobSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store