import { IJob } from "@typings/IJob";
import { RootState } from "./store";
import { createSelector } from "@reduxjs/toolkit";

const jobs = require('../../data.json')

const getTheme = (state:RootState)=>state.theme
const getFilters = (state:RootState)=>state.jobs

export const selectTheme = createSelector(getTheme,(theme)=>theme)
export const selectFilters = createSelector(getFilters,(filters)=>filters)

export const SpecificJobSelector =(id:string)=> jobs.find((job:IJob)=>String(job.id)===id)