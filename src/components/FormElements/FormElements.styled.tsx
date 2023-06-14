import styled from 'styled-components'

export interface ILabel {
  hideOnMobile?: boolean
}

export const Label = styled.label<ILabel>`
  position: relative;
  display: 'flex';
  align-items: center;
  gap: 1rem;
  padding: var(--padding-search-bar-items);
  min-width: 20rem;
  &[for='filterByInfos'] {
    flex-grow: 3;
  }
  &[for='filterByLocation'] {
    flex-grow: 1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 0.1rem;
    height: 100%;
    background-color: var(--color-dark-grey);
    opacity: 0.2;
  }
  input {
    flex-grow: 1;
    padding: 1rem;
    color: var(--color-text);
    font-size: var(--font-size-body);
    border-radius: var(--border-radius-xs);
    overflow: hidden;
    &::placeholder {
      color: #8c8f96;
    }
  }
  svg {
    width: 30px;
  }

  @media (max-width: 48.12em) {
    padding: 0;
    min-width: 12rem;
    display:${(props)=>props.hideOnMobile?'none':'flex'}
  }
`
