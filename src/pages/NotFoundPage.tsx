import {Link} from 'react-router-dom'
import styled from 'styled-components'

const NotFoundPage = () => {
  return (
    <NotFoundSection>
      <h3>Sorry! Page not found</h3>
      <Link to='/'>
        <h4>Click here to go Home</h4>
      </Link>
    </NotFoundSection>
  )
}

export default NotFoundPage

export const NotFoundSection = styled.section`
  width: 100%;
  background-color: var(--White);
  border-radius: 0.6rem;
  padding: 4rem;
  transition: 0.2s linear;
  text-align: center;
  > h3 {
    margin-bottom: 2rem;
  }
`
