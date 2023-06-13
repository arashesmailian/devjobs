import CompanyImage from '@components/CompanyImage/CompanyImage'
import {IJob} from '@typings/IJob'
import {JobContainer} from './JobCard.styled'
import JobInfos from '@components/JobInfos/JobInfos'
import {Link} from 'react-router-dom'

const JobCard = (props: {key: number; job: IJob}) => {
  return (
    <JobContainer>
      <CompanyImage
        company={props.job.company}
        small={true}
        backGroundColor={props.job.logoBackground}
      />
      <JobInfos postedAt={props.job.postedAt} contract={props.job.contract} />
      <Link to={`/jobs/${props.job.id}`}>
        <h3>{props.job.position}</h3>
      </Link>
      <p>{props.job.company}</p>
      <h4>{props.job.location}</h4>
    </JobContainer>
  )
}

export default JobCard
