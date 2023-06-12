import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 12.2rem;
  background-color: ${(props) => props.theme.bodyBg};
  & > svg {
    width: 100%;
    height: 100%;
  }
`
export const HeaderItemsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -150px;
  margin-left: 50px;
  margin-right: 50px;
`
export const Header = {Container:HeaderContainer,ItemsContainer:HeaderItemsContainer}