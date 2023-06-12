import {useMemo} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {JobInetrface} from '@typings/JobInterface'
import CompanyPageHeader from '@components/CompanyPageHeader/CompanyPageHeader'
import JobPageDescription from '@components/JobPageDescription/JobPageDescription'
import JobPageBottomBanner from '@components/JobPageFooter/JobPageFooter'

const jobs = require('../../data.json')

const JobPage: React.FC = () => {
  const {id} = useParams()
  const job: JobInetrface = useMemo(() => {
    return jobs.find((job: JobInetrface) => String(job.id) === id)
  }, [id])
  return (
    <>
      <JobPageMainContainer>
        <CompanyPageHeader
          company={job.company}
          logoBackGroundColor={job.logoBackground}
          website={job.website}
        ></CompanyPageHeader>
        <JobPageDescription {...job} />
      </JobPageMainContainer>
      <Footer>
        <JobPageBottomBanner {...job} />
      </Footer>
    </>
  )
}

export default JobPage

export const JobPageMainContainer = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10rem;
  margin-top: -3.5rem;
  padding: 0 15%;
`
export const Footer = styled.footer`
  width: 100%;
  background-color: var(--White);
  transition: 0.2s linear;
  padding: 0 15%;
`
