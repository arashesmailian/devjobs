import styled from 'styled-components'
import {ICompanyImage} from '@typings/ICompanyImage'

export const CompanyImageContainer = styled.div<ICompanyImage>`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${(props) => (props.small ? '5rem' : '10rem')};
  height: ${(props) => (props.small ? '5rem' : '')};
  border-radius: ${(props) => (props.small ? '1.5rem' : '')};
  margin-bottom: ${(props) => (props.small ? '2.2rem' : '')};
  background-color: ${(props) => props.backGroundColor};
  img {
    width: ${(props) => (props.small ? '70%' : '58%')};
  }
  @media (max-width: 48.12em) {
    width: ${(props) => (props.small ? '' : '8rem')};
    height: ${(props) => (props.small ? '' : '8rem')};
    border-radius: ${(props) => (props.small ? '' : '1.5rem')};
    position: absolute;
    transform: translateY(-50%);
  }
`
