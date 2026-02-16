import { StrictMode, type ReactElement } from 'react'
import { createRoot } from 'react-dom/client'
import '../styles/main.css'

export const renderPage = (element: ReactElement) => {
  const root = document.getElementById('root')
  if (!root) return

  createRoot(root).render(
    <StrictMode>
      {element}
    </StrictMode>
  )
}
