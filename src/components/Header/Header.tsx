import {HeaderContainer} from './Header.styled'
import ToggleButton from '@components/ToggleButton/ToggleButton'
import {LogoIcon} from '@assets/desktop/LogoIcon'

const Headers = () => {
  return (
    <HeaderContainer>
      <LogoIcon />
      <ToggleButton />
    </HeaderContainer>
  )
}

export default Headers
