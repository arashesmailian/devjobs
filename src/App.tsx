import * as React from 'react'
import styled, {css} from 'styled-components'

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
    </Container>
  )
}
export default App
