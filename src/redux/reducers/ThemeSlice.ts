import {PayloadAction, createSlice} from '@reduxjs/toolkit'

const prefersColorScheme:string = window.matchMedia('(prefers-color-scheme: light)')
  .matches
  ? 'light'
  : 'dark'

export const ThemeSlice = createSlice({
    name:'themeState',
    initialState: prefersColorScheme,
    reducers:{
        changeTheme:(state,action:PayloadAction<string>)=> {
          return action.payload
        }
    }
})

export const {changeTheme} = ThemeSlice.actions
export default ThemeSlice.reducer