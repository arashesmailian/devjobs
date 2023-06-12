import styled from 'styled-components'

export const CompanyHeaderSection = styled.section`
  width: min(65rem, 100%);
  display: flex;
  background-color: var(--White);
  border-radius: 0.6rem;
  overflow: hidden;
  transition: 0.2s linear;
  @media (max-width: 48.12em) {
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
  }
`
export const CompanyPageHeaderInfos = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.2rem;
  h2 {
    margin-bottom: 0.8rem;
  }
  p {
    color: var(--Dark-Gray);
  }
  @media (max-width: 48.12em) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
    padding-top: 5rem;
  }
`
