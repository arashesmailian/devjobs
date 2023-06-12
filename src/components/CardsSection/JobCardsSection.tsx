import {useSelector} from 'react-redux'
import {CardsSectionContainer} from './JobCardsSection.styled'
import {RootState} from '@redux/store'
import JobCard from '@components/JobCard/JobCard'
import {JobInetrface} from '@typings/JobInterface'

const CardsSection = () => {
  const jobs = useSelector((state: RootState) => state.jobs)
  return (
    <CardsSectionContainer>
      {jobs.map((job: JobInetrface) => (
        <JobCard key={job.id} job={job} />
      ))}
    </CardsSectionContainer>
  )
}

export default CardsSection
