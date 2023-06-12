import {IconMoon} from '@assets/desktop/IconMoon'
import {ThemeButton, ToggleButtonContainer} from './ToggleButton.styled'
import {IconSun} from '@assets/desktop/IconSun'
import {useDispatch, useSelector} from 'react-redux'
import {changeTheme} from '@redux/reducers/ThemeSlice'
import {RootState} from '@redux/store'

const ToggleButton = () => {
  const isLight = useSelector((state: RootState) => state.theme.isLightMode)
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(changeTheme(!isLight))
  }
  return (
    <ToggleButtonContainer>
      <IconSun />
      <ThemeButton onClick={handleClick} isLightMode={isLight} />
      <IconMoon />
    </ToggleButtonContainer>
  )
}

export default ToggleButton
