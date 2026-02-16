import { AppShell } from '../components/AppShell'
import { Home } from '../pages/Home'
import { renderPage } from './renderPage'

renderPage(
  <AppShell>
    <Home />
  </AppShell>
)
