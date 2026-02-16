import { AppShell } from '../components/AppShell'
import { Blog } from '../pages/Blog'
import { renderPage } from './renderPage'

renderPage(
  <AppShell>
    <Blog />
  </AppShell>
)
