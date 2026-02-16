import { AppShell } from '../components/AppShell'
import { BlogPost } from '../pages/BlogPost'
import { renderPage } from './renderPage'

renderPage(
  <AppShell>
    <BlogPost postId="4" />
  </AppShell>
)
