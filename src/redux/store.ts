import {configureStore , combineReducers} from '@reduxjs/toolkit'
import ThemeSlice from '@redux/reducers/ThemeSlice'
import JobsSlice from './reducers/JobsSlice';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  theme:ThemeSlice,
  jobs:JobsSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store