import store from '@redux/store'
import GlobalStyles from '@styles/GlobalStyles/GlobalStyles.styled'
import {Provider} from 'react-redux'

const ProvidersWrapper = (props: any) => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      {props.children}
    </Provider>
  )
}

export default ProvidersWrapper
