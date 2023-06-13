import {useDispatch, useSelector} from 'react-redux'
import {CardsSectionContainer} from './JobCardsSection.styled'
import {RootState} from '@redux/store'
import JobCard from '@components/JobCard/JobCard'
import {IJob} from '@typings/IJob'
import {includeText} from '../../helper/includeText'
import Button from '@components/Button/Button'
import {changingNumberOfJobsToShow} from '@redux/reducers/newJobSlice'

const ALLJOBS = require('../../../data.json')

const CardsSection = () => {
  const dispatch = useDispatch()
  const {
    filteredByInfo,
    filteredByLocation,
    filterdByFullTime,
    numberOfJobsToShow,
  } = useSelector((state: RootState) => state.jobs)

  const filterdJobs = ALLJOBS.filter((job: IJob) => {
    let isFoundwithInfos = false
    let isFoundwithLocation = false
    let isFoundwithFullTime = false

    if (filteredByInfo) {
      isFoundwithInfos =
        includeText(job.company, filteredByInfo) ||
        includeText(job.position, filteredByInfo)
    }
    if (filteredByLocation) {
      isFoundwithLocation = includeText(job.location, filteredByLocation)
    }
    if (filterdByFullTime) {
      isFoundwithFullTime = includeText(job.contract, 'Full Time')
    }
    if (filteredByInfo && filteredByLocation && filterdByFullTime) {
      return isFoundwithInfos && isFoundwithLocation && isFoundwithFullTime
    }
    if (filteredByInfo && filteredByLocation && !filterdByFullTime) {
      return isFoundwithInfos && isFoundwithLocation && !isFoundwithFullTime
    }
    if (filteredByInfo && !filteredByLocation && filterdByFullTime) {
      return isFoundwithInfos && !isFoundwithLocation && isFoundwithFullTime
    }
    if (!filteredByInfo && filteredByLocation && filterdByFullTime) {
      return !isFoundwithInfos && isFoundwithLocation && isFoundwithFullTime
    }
    if (filteredByInfo && !filteredByLocation && !filterdByFullTime) {
      return isFoundwithInfos
    }
    if (!filteredByInfo && filteredByLocation && !filterdByFullTime) {
      return isFoundwithLocation
    }
    if (!filteredByInfo && !filteredByLocation && filterdByFullTime) {
      return isFoundwithFullTime
    }

    return true
  })

  const numOfFilterdJobs = filterdJobs.length

  return (
    <>
      <CardsSectionContainer>
        {filterdJobs.map(
          (job: IJob, index: number) =>
            index < numberOfJobsToShow && <JobCard key={job.id} job={job} />
        )}
      </CardsSectionContainer>
      {numberOfJobsToShow < numOfFilterdJobs && (
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
