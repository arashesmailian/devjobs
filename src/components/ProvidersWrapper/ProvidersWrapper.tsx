import {Provider} from 'react-redux'
import GlobalStyles from '@styles/GlobalStyles'
import store from '@redux/store'
import {PropsWithChildren} from 'react'

const ProvidersWrapper = (props: PropsWithChildren) => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      {props.children}
    </Provider>
  )
}

export default ProvidersWrapper
