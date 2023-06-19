import {Provider} from 'react-redux'
import GlobalStyles from '@styles/GlobalStyles'
import store from '@redux/store'

const ProvidersWrapper = (props: any) => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      {props.children}
    </Provider>
  )
}

export default ProvidersWrapper
