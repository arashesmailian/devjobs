import { IJob } from "@typings/IJob";
import { includeText } from "./includeText";

const ALLJOBS = require('../../data.json')


export const filteringJobsFunction = (filteredByInfo:string,filteredByLocation:string,filteredByFullTime:boolean)=>{
    return ALLJOBS.filter((job: IJob) => {
        let isFoundedWithInfos = false
        let isFoundedWithLocation = false
        let isFoundedWithFullTime = false

        if (filteredByInfo) {
          isFoundedWithInfos =
            includeText(job.company, filteredByInfo) ||
            includeText(job.position, filteredByInfo)
        }
        if (filteredByLocation) {
          isFoundedWithLocation = includeText(job.location, filteredByLocation)
        }
        if (filteredByFullTime) {
          isFoundedWithFullTime = includeText(job.contract, 'Full Time')
        }
        if (filteredByInfo && filteredByLocation && filteredByFullTime) {
          return (
            isFoundedWithInfos && isFoundedWithLocation && isFoundedWithFullTime
          )
        }
        if (filteredByInfo && filteredByLocation && !filteredByFullTime) {
          return (
            isFoundedWithInfos &&
            isFoundedWithLocation &&
            !isFoundedWithFullTime
          )
        }
        if (filteredByInfo && !filteredByLocation && filteredByFullTime) {
          return (
            isFoundedWithInfos &&
            !isFoundedWithLocation &&
            isFoundedWithFullTime
          )
        }
        if (!filteredByInfo && filteredByLocation && filteredByFullTime) {
          return (
            !isFoundedWithInfos &&
            isFoundedWithLocation &&
            isFoundedWithFullTime
          )
        }
        if (filteredByInfo && !filteredByLocation && !filteredByFullTime) {
          return isFoundedWithInfos
        }
        if (!filteredByInfo && filteredByLocation && !filteredByFullTime) {
          return isFoundedWithLocation
        }
        if (!filteredByInfo && !filteredByLocation && filteredByFullTime) {
          return isFoundedWithFullTime
        }

        return true
})}