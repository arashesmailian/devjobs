import {JobInetrface} from '@typings/JobInterface'
import {
  JobDescSection,
  JobDescriptionDetails,
} from './JobPageDescription.styled'
import JobInfos from '@components/JobInfos/JobInfos'
import Button from '@components/Button/Button'

const JobPageDescription = (props: JobInetrface) => {
  return (
    <JobDescSection>
      <JobDescriptionDetails>
        <div>
          <JobInfos postedAt={props.postedAt} contract={props.contract} />
          <h1>{props.position}</h1>
          <h4>{props.location}</h4>
        </div>
        <a href={props.apply} target='_blank' rel='noreferrer'>
          <Button primary>Apply now</Button>
        </a>
      </JobDescriptionDetails>
      <div>{props.description}</div>
      <div>
        <h3>Requirements</h3>
        <p>{props.requirements.content}</p>
        <ul>
          {props.requirements.items.map((item, index) => (
            <li key={index}>
              <span></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3>What You Will Do</h3>
        <p>{props.role.content}</p>
        <ol>
          {props.role.items.map((item, index) => (
            <li key={index}>
              <span>{index + 1}</span>
              {item}
            </li>
          ))}
        </ol>
      </div>
    </JobDescSection>
  )
}

export default JobPageDescription
