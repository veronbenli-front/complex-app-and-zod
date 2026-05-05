import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import './i18n'
import { RouterProvider } from '@tanstack/react-router'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
