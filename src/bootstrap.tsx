import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/style.css'
// import ErrorBoundary from './components/ErrorBoundary'
import { ToastContainer } from 'react-toastify'
import { App } from './App'

const RemoteThemeProvider = React.lazy(() => import('utilUi/ThemeProvider'))

// const AppWithoutTheme = () => {
//   console.warn(
//     "Falha ao carregar o ThemeProvider do MFE 'utilUi'. A aplicação será renderizada sem o tema customizado."
//   )
//   return <App />
// }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ErrorBoundary fallback={<AppWithoutTheme />}> */}
    <Suspense fallback={<></>}>
      <RemoteThemeProvider>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <App />
      </RemoteThemeProvider>
    </Suspense>
    {/* </ErrorBoundary> */}
  </React.StrictMode>
)
