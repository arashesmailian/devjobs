import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { IJob } from "@typings/IJob";

const allData:IJob[] = require('../../../data.json')
const data:IJob[] = allData.slice(0,9)

export const JobsSlice = createSlice({
    name:'jobsState',
    initialState:data,
    reducers:{
        fullTimeFilter:(state,action:PayloadAction<boolean>)=>{
            if(!action.payload) return data
            return allData.filter(job=>job.contract==='Full Time')
        },
        titleFilter:(state,action:PayloadAction<string>)=>{
            if(!action.payload) return data
            return allData.filter(job=>job.position.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()) || job.company.toLowerCase().includes(action.payload.toLowerCase()))
        },
        locationFilter:(state,action:PayloadAction<string>)=>{
            if(!action.payload) return data
            return allData.filter(job=>job.location.toLowerCase().includes(action.payload.toLowerCase()))
        },
        loadMore:(state,action:PayloadAction<any>)=>{
            return state.concat(...allData.slice(9))
        },
    }
})

export const {fullTimeFilter,titleFilter,locationFilter,loadMore} = JobsSlice.actions
export default JobsSlice.reducer