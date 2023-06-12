import styled from 'styled-components'

export const JobDescSection = styled.section`
  width: min(65rem, 100%);
  display: flex;
  flex-direction: column;
  background-color: var(--White);
  border-radius: 0.6rem;
  padding: 4.8rem;
  margin-top: 3rem;
  gap: 4rem;
  transition: 0.2 linear;
  h3 {
    margin-bottom: 2rem;
  }
  ul,
  ol {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }
  ul li {
    display: flex;
    position: relative;
    span {
      position: relative;
      display: inline-block;
      flex: 0 0 3rem;
      &::after {
        content: '';
        display: inline-block;
        position: absolute;
        width: 0.4rem;
        height: 0.4rem;
        left: 0;
        top: 0.7rem;
        border-radius: 100%;
        background-color: var(--Dark-Gray);
      }
    }
  }
  ol li {
    display: flex;
    position: relative;
    span {
      position: relative;
      display: inline-block;
      flex: 0 0 3rem;
      color: var(--Violet);
      font-weight: 700;
    }
  }
`
export const JobDescriptionDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    padding: 0.8rem 0;
  }
`
export const JobItemsDots = styled.span``
