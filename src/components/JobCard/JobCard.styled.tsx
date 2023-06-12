import styled from 'styled-components'

export const JobContainer = styled.article`
  padding: 1rem 3.2rem 3.2rem;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(100% - 3.2rem);
    background-color: var(--White);
    border-radius: 0.5rem;
    transition: 0.2s linear;
  }
  > * {
    position: relative;
  }
  h3 {
    padding: 1.2rem 0;
    &:hover {
      color: var(--Dark-Gray);
    }
  }
  h4 {
    padding-top: 4rem;
  }
  > p {
    color: var(--Dark-Gray);
  }
`
