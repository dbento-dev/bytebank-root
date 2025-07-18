import React, { ReactElement, Suspense } from 'react'

const RemoteHeader = React.lazy(() => import('appHeader/Header'))
const RemoteDashboard = React.lazy(() => import('appDashboard/Dashboard'))
const RemoteTransactions = React.lazy(
  () => import('appTransactions/Transactions')
)

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
    <div className="layout-container">
      <header className="layout-header">
        <Suspense fallback={<LoadingFallback />}>
          <RemoteHeader />
        </Suspense>
      </header>
      <main className="layout-main">
        <section className="layout-dashboard">
          <Suspense fallback={<LoadingFallback />}>
            <RemoteDashboard />
          </Suspense>
        </section>
        <aside className="layout-extrato">
          <Suspense fallback={<LoadingFallback />}>
            <RemoteTransactions />
          </Suspense>
        </aside>
      </main>
    </div>
  )
}
