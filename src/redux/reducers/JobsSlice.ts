import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { JobInetrface } from "@typings/JobInterface";

const data:JobInetrface[] = require('../../../data.json')

export const JobsSlice = createSlice({
    name:'jobsState',
    initialState:data,
    reducers:{
        fullTimeFilter:(state,action:PayloadAction<boolean>)=>{
            if(!action.payload) return data
            return data.filter(job=>job.contract==='Full Time')
        },
        titleFilter:(state,action:PayloadAction<string>)=>{
            return data.filter(job=>job.position.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
        },
        findSpecificJob:(state,action:PayloadAction<string>)=>{
            return data.filter(job=>String(job.id)===action.payload)
        }   
    }
})

export const {fullTimeFilter,titleFilter,findSpecificJob} = JobsSlice.actions
export default JobsSlice.reducer