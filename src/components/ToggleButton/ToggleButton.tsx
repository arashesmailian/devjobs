import {IconMoon} from '@assets/desktop/IconMoon'
import {ThemeButton, ToggleButtonContainer} from './ToggleButton.styled'
import {IconSun} from '@assets/desktop/IconSun'
import {useDispatch, useSelector} from 'react-redux'
import {changeTheme} from '@redux/reducers/ThemeSlice'
import {RootState} from '@redux/store'

const ToggleButton = () => {
  const theme = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(changeTheme(theme === 'light'?'dark':'light'))
  }
  return (
    <ToggleButtonContainer>
      <IconSun />
      <ThemeButton onClick={handleClick} activeTheme={theme} />
      <IconMoon />
    </ToggleButtonContainer>
  )
}

export default ToggleButton
