import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  position: relative;
`
export const FromSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--background-color-elements);
  border-radius: var(--border-radius-s);
  padding-right: 1.6rem;
  transition: 0.2s linear;

  @media (max-width: 75em) {
    & > * {
      flex-shrink: 1;
    }
  }
  @media (max-width: 48.12em) {
    padding: 1.2rem;
    gap: 0.6rem;
    > label:first-child::after {
      display: none;
    }
    > label:first-child svg {
      display: none;
    }
  }
`
