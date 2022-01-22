import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import 'react-quill/dist/quill.snow.css'
import 'nprogress/nprogress.css'
// import 'src/mock';
import { enableES5 } from 'immer'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import { SettingsProvider } from './context/SettingsContext'
import { configureStore } from './store'
import { restoreSettings } from './utils/settings'
import App from './App'
import { PublicClientApplication } from '@azure/msal-browser'
import { MsalProvider } from '@azure/msal-react'
import { msalConfig } from './authConfig'

const msalInstance = new PublicClientApplication(msalConfig)

enableES5()

const store = configureStore()
const settings = restoreSettings()

ReactDOM.render(
  <Provider store={store}>
    <SettingsProvider settings={settings}>
      <MsalProvider instance={msalInstance}>
        <App />
      </MsalProvider>
    </SettingsProvider>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
