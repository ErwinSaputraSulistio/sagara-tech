import ReactDOM from 'react-dom/client'
import './styles/index.scss'

import { GlobalContextProvider } from './configs/contexts/globalContext'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <GlobalContextProvider>
    <App/>
  </GlobalContextProvider>
)
