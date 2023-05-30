import * as React from 'react'
import styled, {css} from 'styled-components'
import SunIcon from '@assets/desktop/icon-sun.svg'
import MoonIcon from '@assets/desktop/icon-moon.svg'

const data = require('../data.json')

console.log(data)

const Button = styled.button<{$primary?: boolean}>`
  background: transparent;
  border-radius: 5px;
  border: 2px solid #bf4f74;
  color: #bf4f74;
  margin: 0;
  padding: 1rem 1rem;
  ${(props) =>
    props.$primary &&
    css`
      background: #bf4f74;
      color: white;
    `}
  &:hover {
    background: gray;
    cursor: pointer;
  }
`
const ThemeButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  background-color: pink;
`

const ThemeButton = styled.button`
  width: 4.8rem;
  height: 2.4rem;
  border-radius: 1rem;
  position: relative;
  background-color: white;
  transition: 0.2s linear;
  &::before {
    content: '';
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
    background-color: #5964e0;
    border-radius: 50%;
    position: absolute;
    top: 0.45rem;
    left: 0.5rem;
    transition: 0.2s linear;
  }
  &:active {
    transform: scale(0.9);
    &::before {
      transform: translateX(2.4rem);
    }
  }
  @media (hover: hover) {
    &:hover {
      &::before {
        background-color: #939bf4;
      }
    }
  }
`

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`

const App: React.FC = () => {
  return (
    <Container>
      Hello World!
      <Button>Normal Button</Button>
      <Button $primary>Primary Button</Button>
      <ThemeButtonContainer>
        <SunIcon />
        <ThemeButton></ThemeButton>
        <MoonIcon />
      </ThemeButtonContainer>
    </Container>
  )
}
export default App
