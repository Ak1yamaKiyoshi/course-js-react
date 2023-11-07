import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/app/App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/system';
import theme from './styles/theme/theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
