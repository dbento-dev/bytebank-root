import React, { Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import { Typography, useTheme } from '@mui/material'

const RemoteHeader = React.lazy(() => import('app-header/Header'))

const HeaderFallback = () => (
  <div
    style={{
      backgroundColor: '#cc0000',
      color: 'white',
      padding: '1rem',
      textAlign: 'center',
      fontFamily: 'sans-serif'
    }}
  >
    O cabeçalho não está disponível no momento.
  </div>
)

export const App = () => {
  const theme = useTheme()
  return (
    <>
      <ErrorBoundary fallback={<HeaderFallback />}>
        <Suspense fallback={<div>Carregando cabeçalho...</div>}>
          <RemoteHeader />
        </Suspense>
      </ErrorBoundary>

      <Typography variant="h4" color={theme.palette.primary.light}>
        Teste de Estilo Global
      </Typography>
    </>
  )
}
