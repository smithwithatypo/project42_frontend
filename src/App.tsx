import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import ReactMarkdown from 'react-markdown';
import Markdown from 'react-markdown';
import { Card, CardContent } from "@/components/ui/card"
import remarkGfm from 'remark-gfm';


function App() {

  const smaller_markdown = "Ways to climb: \n  1. 1+1+1+1\n  2. 1+1+2\n  3. 1+2+1\n  4. 2+1+1  \n  5. 2+2\n\n"
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle></ModeToggle>

      <Card>
        <CardContent style={{ whiteSpace: 'pre' }}>
          {smaller_markdown}
        </CardContent>
      </Card>

    </ThemeProvider>
  )
}

export default App
