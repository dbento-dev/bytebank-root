import { lazy, Suspense } from 'react'

const RemoteHeader = lazy(() => import('app-header/Header'))

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Carregando header...</div>}>
        <RemoteHeader />
      </Suspense>
      <h1>APP ROOT</h1>
    </>
  )
}
