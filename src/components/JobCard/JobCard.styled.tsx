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
    height: calc(100% - 3.5rem);
    background-color: var(--background-color-elements);
    border-radius: var(--border-radius-s);
    transition: 0.2s linear;
  }
  > * {
    position: relative;
  }
  h3 {
    padding: 1.2rem 0;
    &:hover {
      color: var(--color-dark-grey);
    }
  }
  h4 {
    padding-top: 4rem;
  }
`
