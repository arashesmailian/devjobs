import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { ThemeState } from '@typings/ThemeState'

const firstState: ThemeState = {
  isLightMode: true,
}

// const prefersColorScheme:string = window.matchMedia('(prefers-color-scheme: light)')
//   .matches
//   ? 'light'
//   : 'dark'

export const ThemeSlice = createSlice({
    name:'themeState',
    initialState: firstState,
    reducers:{
        changeTheme:(state,action:PayloadAction<boolean>)=> {
          return {...state,isLightMode:action.payload}
        }
    }
})

export const {changeTheme} = ThemeSlice.actions
export default ThemeSlice.reducer