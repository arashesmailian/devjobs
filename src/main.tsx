import * as ReactDOM from 'react-dom/client'
import App from './App'
import ProvidersWrapper from '@components/ProvidersWrapper/ProvidersWrapper'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ProvidersWrapper>
    <App />
  </ProvidersWrapper>
)
