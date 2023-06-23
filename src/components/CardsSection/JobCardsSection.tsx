import {useMemo} from 'react'
import {useDispatch, useSelector} from 'react-redux'

import JobCard from '@components/JobCard/JobCard'
import Button from '@components/Button/Button'

import {changingNumberOfJobsToShow} from '@redux/reducers/JobSlice'
import {selectFilters} from '@redux/selectors'

import {CardsSectionContainer} from './JobCardsSection.styled'
import {IJob} from '@typings/IJob'
import {filteringJobsFunction} from '@helper/filterJobs'
import {useQueryParams} from '@hooks/useSearchParamsState'

const CardsSection = () => {
  const dispatch = useDispatch()
  const {numberOfJobsToShow} = useSelector(selectFilters)
  const {info, loc, fullTime} = useQueryParams()
  const filteredJobs = useMemo(
    () => filteringJobsFunction(info, loc, fullTime),
    [info, loc, fullTime]
  )

  const numOfFilteredJobs = filteredJobs.length

  return (
    <>
      <CardsSectionContainer>
        {filteredJobs?.map(
          (job: IJob, index: number) =>
            index < numberOfJobsToShow && <JobCard key={job.id} job={job} />
        )}
      </CardsSectionContainer>
      {numberOfJobsToShow < numOfFilteredJobs && (
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
