import styled from 'styled-components'

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.6rem 1rem;
  min-width: 20rem;
  [for='filterByInfos'] & {
    flex-grow: 3;
  }
  [for='filterByLocation'] & {
    flex-grow: 1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0.1rem;
    height: 100%;
    background-color: var(--Dark-Gray);
    opacity: 0.2;
  }
  input {
    flex-grow: 1;
    padding: 1rem;
    color: var(--Very-Dark-Blue);
    font-size: 1.2rem;
    overflow: hidden;
  }
  svg {
    width: 30px;
  }
`
