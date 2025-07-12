import { Typography } from '@mui/material'
import { lazy, Suspense } from 'react'

const RemoteHeader = lazy(() => import('app-header/Header'))

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Carregando header...</div>}>
        <RemoteHeader />
      </Suspense>

      <Typography variant="h4" color="primary">
        Teste de Estilo Global
      </Typography>
    </>
  )
}
