import styled from 'styled-components'
import {ThemeButtonProps} from '@typings/ThemeButton'

export const ToggleButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
`
export const ThemeButton = styled.button<ThemeButtonProps>`
  width: 4.8rem;
  height: 2.4rem;
  border-radius: 1.5rem;
  position: relative;
  background-color: var(--color-white);
  transition: 0.2s linear;
  &::before {
    content: '';
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
    background-color: var(--color-violet);
    border-radius: 100%;
    position: absolute;
    top: 0.45rem;
    left: 0.5rem;
    transition: 0.2s linear;
    transform: ${(props) =>
      props.activeTheme === 'light' ? 'translateX(0)' : 'translateX(2.4rem)'};
  }
  @media (hover: hover) {
    &:hover {
      &::before {
        background-color: #939bf4;
      }
    }
  }
`
