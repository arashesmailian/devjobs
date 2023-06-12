import {InfosContainer} from './JobInfos.styled'

const JobInfos = (props: {postedAt: string; contract: string}) => {
  return (
    <InfosContainer>
      <p>{props.postedAt}</p>
      <span></span>
      <p>{props.contract}</p>
    </InfosContainer>
  )
}

export default JobInfos
