import { AppShell } from '../components/AppShell'
import { AboutPage } from '../pages/About'
import { renderPage } from './renderPage'

renderPage(
  <AppShell>
    <AboutPage />
  </AppShell>
)
