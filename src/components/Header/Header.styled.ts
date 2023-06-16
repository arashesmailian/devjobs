import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 16rem;
  background-image: url('../../assets/desktop/HeaderBgPattern.svg');
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: var(--padding-layout);

  @media (max-width: 48.12em) {
    background-image: url('../../assets/mobile/Bgpatternheader.svg');
  }
`
// export const HeaderItemsContainer = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: -120px;
//   /* margin-left: 50px;
//   margin-right: 50px; */
//   padding: var(--padding-layout);
// `
// export const Header = {
//   Container: HeaderContainer,
//   ItemsContainer: HeaderItemsContainer,
// }
