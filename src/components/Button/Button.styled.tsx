import styled from 'styled-components'
import {IMainButton} from '@typings/IMainButton'

export const MainButton = styled.button<IMainButton>`
  display: ${(props) => (props.showOnlyOnMobile ? 'none' : 'block')};
  width: ${(props) => (props.autoWidth ? 'auto' : '14rem')};
  margin-top: ${(props) => (props.marginTop ? '6rem' : '')};
  font-size: var(--font-size-body);
  font-weight: 700;
  border-radius: var(--border-radius-xs);
  padding: 1.6rem;
  flex-shrink: 1;
  text-transform: capitalize;
  transition: 0.2s linear;
  background-color: ${(props) =>
    props.noBackground
      ? 'transparent'
      : props.primary
      ? 'var(--color-violet)'
      : 'var(--background-color-btn-2)'};
  color: ${(props) =>
    props.primary ? 'var(--color-white)' : 'var(--color-btn-2)'};

  @media (hover: hover) {
    &:hover {
      background-color: ${(props) =>
        props.primary
          ? 'var(--color-light-violet)'
          : 'var(--background-color-btn-2-hover)'};
    }
  }
  @media (max-width: 48.12em) {
    display: ${(props) =>
      props.hideOnMobile ? 'none' : props.showOnlyOnMobile ? 'block' : ''};
  }
`
