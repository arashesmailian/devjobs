import CompanyImage from '@components/CompanyImage/CompanyImage'
import {
  CompanyHeaderSection,
  CompanyPageHeaderInfos,
} from './CompanyPageHeader.styled'
import Button from '@components/Button/Button'

const CompanyPageHeader = (props: {
  company: string
  logoBackGroundColor: string
  website: string
}) => {
  return (
    <CompanyHeaderSection>
      <CompanyImage
        small={false}
        company={props.company}
        backGroundColor={props.logoBackGroundColor}
      />
      <CompanyPageHeaderInfos>
        <div>
          <h2>{props.company}</h2>
          <p>{props.website}</p>
        </div>
        <a href={props.website} target='_blank' rel='noreferrer'>
          <Button primary>Company Site</Button>
        </a>
      </CompanyPageHeaderInfos>
    </CompanyHeaderSection>
  )
}

export default CompanyPageHeader
