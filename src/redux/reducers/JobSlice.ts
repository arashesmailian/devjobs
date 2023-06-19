import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface filterState{
    filteredByInfo:string;
    filteredByLocation:string;
    filteredByFullTime:boolean;
    numberOfJobsToShow:number;
} 

const initialFilterState:filterState = {
    filteredByInfo:'',
    filteredByLocation:'',
    filteredByFullTime:false,
    numberOfJobsToShow:9,
}

export const newJobSlice = createSlice({
    name:'filtersState',
    initialState:initialFilterState,
    reducers:{
        filteringOnInfo:(state,action:PayloadAction<string>)=>{
            return {...state,filteredByInfo:action.payload}
        },
        filteringByLocation:(state,action:PayloadAction<string>)=>{
            return {...state,filteredByLocation:action.payload}
        },
        filteringByFullTime:(state,action:PayloadAction<boolean>)=>{
            return {...state,filteredByFullTime:action.payload}
        },
        changingNumberOfJobsToShow:(state,action:PayloadAction<number>)=>{
            return {...state,numberOfJobsToShow:state.numberOfJobsToShow + action.payload}
        },
    }
})

export const {filteringOnInfo,filteringByLocation,filteringByFullTime,changingNumberOfJobsToShow} = newJobSlice.actions
export default newJobSlice.reducer