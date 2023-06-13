import {Header} from './Header.styled'
import {HeaderBgPattern, LogoIcon, IconLocation} from '@assets/desktop'
import ToggleButton from '@components/ToggleButton/ToggleButton'

const Headers = () => {
  return (
    <Header.Container>
      <HeaderBgPattern />
      <Header.ItemsContainer>
        <div>
          <LogoIcon />
        </div>
        <ToggleButton />
      </Header.ItemsContainer>
    </Header.Container>
  )
}

export default Headers
