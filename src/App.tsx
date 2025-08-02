import React, { ReactElement, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'
import { history } from 'utilStore/stores/history'

const RemoteHeader = React.lazy(() => import('appHeader/Header'))
const RemoteDashboard = React.lazy(() => import('appDashboard/Dashboard'))
const RemoteTransactions = React.lazy(
  () => import('appTransactions/Transactions')
)

const LoadingFallback = (): ReactElement => <div>Carregando...</div>
// const ErrorFallback = (): ReactElement => (
//   <div
//     style={{
//       padding: '1em',
//       backgroundColor: '#ffcccb',
//       border: '1px solid red'
//     }}
//   >
//     <p>Ops! Este recurso está temporariamente indisponível.</p>
//   </div>
// )

export const App = () => {
  return (
    <HistoryRouter history={history}>
      <div className="layout-container">
        <header className="layout-header">
          <Suspense fallback={<LoadingFallback />}>
            <RemoteHeader />
          </Suspense>
        </header>

        <Routes>
          <Route
            path="/"
            element={
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
            }
          />

          <Route
            path="/transfers"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <div style={{ padding: '2rem' }}>Página de Transferências</div>
              </Suspense>
            }
          />

          <Route
            path="/investments"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <div style={{ padding: '2rem' }}>Página de Investimentos</div>
              </Suspense>
            }
          />

          <Route
            path="/other-services"
            element={
              <Suspense fallback={<LoadingFallback />}>
                <div style={{ padding: '2rem' }}>Outros serviços</div>
              </Suspense>
            }
          />
        </Routes>
      </div>
    </HistoryRouter>
  )
}
