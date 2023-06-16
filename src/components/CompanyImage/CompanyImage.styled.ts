import styled from 'styled-components'
import {ICompanyImage} from '@typings/ICompanyImage'

export const CompanyImageContainer = styled.div<ICompanyImage>`
  display: grid;
  place-items: center;
  flex-shrink: 0;
  width: ${(props) => (props.small ? '5rem' : '14rem')};
  height: ${(props) => (props.small ? '5rem' : '')};
  border-radius: ${(props) => (props.small ? 'var(--border-radius-l)' : '')};
  margin-bottom: ${(props) => (props.small ? '2.2rem' : '')};
  background-color: ${(props) => props.backGroundColor};
  img {
    width: ${(props) => (props.small ? '' : '58%')};
  }
  @media (max-width: 48.12em) {
    width: ${(props) => (props.small ? '' : '8rem')};
    height: ${(props) => (props.small ? '' : '8rem')};
    border-radius: ${(props) => (props.small ? '' : 'var(--border-radius-l)')};
    position: absolute;
    transform: translateY(-50%);
  }
`
