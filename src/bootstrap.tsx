import './styles/style.css'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import ErrorBoundary from './components/ErrorBoundary'
import { App } from './App'

const RemoteThemeProvider = React.lazy(() => import('utilUi/ThemeProvider'))

const AppWithoutTheme = () => {
  console.warn(
    "Falha ao carregar o ThemeProvider do MFE 'utilUi'. A aplicação será renderizada sem o tema customizado."
  )
  return <App />
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<AppWithoutTheme />}>
      <Suspense fallback={<></>}>
        <RemoteThemeProvider>
          <App />
        </RemoteThemeProvider>
      </Suspense>
    </ErrorBoundary>
  </React.StrictMode>
)
