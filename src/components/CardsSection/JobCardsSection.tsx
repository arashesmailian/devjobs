import {useSelector} from 'react-redux'
import {CardsSectionContainer} from './JobCardsSection.styled'
import {RootState} from '@redux/store'
import JobCard from '@components/JobCard/JobCard'
import {IJob} from '@typings/IJob'

const CardsSection = () => {
  const jobs = useSelector((state: RootState) => state.jobs)
  console.log(jobs)
  return (
    <CardsSectionContainer>
      {jobs.map((job: IJob) => (
        <JobCard key={job.id} job={job} />
      ))}
    </CardsSectionContainer>
  )
}

export default CardsSection
  