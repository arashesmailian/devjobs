import { IJob } from "@typings/IJob";
import { RootState } from "./store";
const jobs = require('../../data.json')


export const ThemeSelector = (state:RootState) => state.theme;
export const JobFiltersSelector = (state:RootState) => state.jobs;
export const SpecificJobSelector =(id:string)=> jobs.find((job:IJob)=>String(job.id)===id)