import { Typography, useTheme } from '@mui/material'
import { lazy, Suspense } from 'react'

const RemoteHeader = lazy(() => import('app-header/Header'))

export const App = () => {
  const theme = useTheme()

  return (
    <>
      <Suspense fallback={<div>Carregando header...</div>}>
        <RemoteHeader />
      </Suspense>

      <Typography variant="h4" color={theme.palette.secondary.dark}>
        Teste de Estilo Global
      </Typography>
    </>
  )
}
