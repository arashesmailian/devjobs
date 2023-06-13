import {IJob} from '@typings/IJob'
import {FooterBannerSection} from './JobPageFooter.styled'
import Button from '@components/Button/Button'

const JobPageFooter = (props: IJob) => {
  return (
    <FooterBannerSection>
      <div>
        <h3>{props.position}</h3>
        <p>{props.company}</p>
      </div>
      <a href={props.apply} target='_blank' rel='noreferrer'>
        <Button primary>Apply now</Button>
      </a>
    </FooterBannerSection>
  )
}

export default JobPageFooter
