import React, { Suspense, type ReactElement } from 'react'

import ErrorBoundary from './components/ErrorBoundary'

const RemoteHeader = React.lazy(() => import('appHeader/Header'))

const LoadingFallback = (): ReactElement => <div>Carregando...</div>
const ErrorFallback = (): ReactElement => (
  <div
    style={{
      padding: '1em',
      backgroundColor: '#ffcccb',
      border: '1px solid red'
    }}
  >
    <p>Ops! Este recurso está temporariamente indisponível.</p>
  </div>
)

export const App = () => {
  return (
    // <>
    //   <ErrorBoundary fallback={<ErrorFallback />}>
    //     <Suspense fallback={<LoadingFallback />}>
    //       <RemoteHeader />
    //     </Suspense>
    //   </ErrorBoundary>
    // </>

    <div className="app-container">
      <Suspense fallback={<LoadingFallback />}>
        <header className="app-header">
          <RemoteHeader />
        </header>
      </Suspense>
      <main className="main-content">
        <section className="app-dashboard">
          <>DASHBOARD</>
        </section>
        <aside className="app-transactions">
          <>EXTRATO</>
        </aside>
      </main>
    </div>
  )
}
