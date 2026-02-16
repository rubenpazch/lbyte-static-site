import { AppShell } from '../components/AppShell'
import { ContactPage } from '../pages/Contact'
import { renderPage } from './renderPage'

renderPage(
  <AppShell>
    <ContactPage />
  </AppShell>
)
