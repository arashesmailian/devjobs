import {useSelector} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import Header from '@components/Header/Header'
import {RootState} from '@redux/store'
import {myTheme} from '@styles/GlobalStyles/GlobalStyles.styled'
import MainBox from '@components/MainBox/MainBox'


const App: React.FC = () => {
  const isLight = useSelector((state: RootState) => state.theme.isLightMode)
  return (
    <>
      <ThemeProvider theme={isLight ? myTheme.light : myTheme.dark}>
        <MainBox />
      </ThemeProvider>
    </>
  )
}
export default App
