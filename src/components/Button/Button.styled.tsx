import styled from 'styled-components'
import {MainButtonInterface} from '@typings/MainButtonInterface'

export const MainButton = styled.button<MainButtonInterface>`
  width: ${(props) => (props.autoWidth ? 'auto' : '12rem')};
  margin-top: ${(props) => (props.marginTop ? '6rem' : '')};
  font-size: 1.2rem;
  font-weight: 700;
  border-radius: 0.5rem;
  padding: ${(props) => (props.isSearch ? '1rem 1.6rem' : '1.6rem')};
  flex-shrink: 1;
  text-transform: capitalize;
  transition: 0.2s linear;
  background-color: ${(props) =>
    props.noBackground
      ? 'transparent'
      : props.primary
      ? 'var(--Violet)'
      : 'var(--background-color-btn2)'};
  color: ${(props) => (props.primary ? 'var(--White)' : 'var(--Violet)')};
  @media (hover: hover) {
    &:hover {
      background-color: ${(props) =>
        props.primary
          ? 'var(--Light-Violet)'
          : 'var(--background-color-hover-btn2)'};
    }
  }
`
