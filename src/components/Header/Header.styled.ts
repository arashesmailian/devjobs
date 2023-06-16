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
