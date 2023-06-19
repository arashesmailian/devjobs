import {useDispatch, useSelector} from 'react-redux'
import {CardsSectionContainer} from './JobCardsSection.styled'
import JobCard from '@components/JobCard/JobCard'
import {IJob} from '@typings/IJob'
import {includeText} from '../../helper/includeText'
import Button from '@components/Button/Button'
import {changingNumberOfJobsToShow} from '@redux/reducers/JobSlice'
import {useMemo} from 'react'
import {JobFiltersSelector} from '@redux/selectors'

const ALLJOBS = require('../../../data.json')

const CardsSection = () => {
  const dispatch = useDispatch()
  const {
    filteredByInfo,
    filteredByLocation,
    filteredByFullTime,
    numberOfJobsToShow,
  } = useSelector(JobFiltersSelector)

  const filteredJobs = useMemo(
    () =>
      ALLJOBS.filter((job: IJob) => {
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
      }),
    [filteredByInfo, filteredByLocation, filteredByFullTime]
  )

  const numOffilteredJobs = filteredJobs.length

  return (
    <>
      <CardsSectionContainer>
        {filteredJobs.map(
          (job: IJob, index: number) =>
            index < numberOfJobsToShow && <JobCard key={job.id} job={job} />
        )}
      </CardsSectionContainer>
      {numberOfJobsToShow < numOffilteredJobs && (
        <Button
          primary
          marginTop
          clickHandler={() => dispatch(changingNumberOfJobsToShow(9))}
        >
          Load More
        </Button>
      )}
    </>
  )
}

export default CardsSection
