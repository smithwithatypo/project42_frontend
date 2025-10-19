import './App.css'
import { ThemeProvider } from './components/theme-provider'
import { ModeToggle } from '@/components/mode-toggle'
import { Card, CardContent } from "@/components/ui/card"
import { sendChatMessage } from './api'
import { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
  const [aiMessage, setAiMessage] = useState('nothing yet');
  const conversationId = "1";
  const userInput = "reply with one sentence. please say hello there";

  const handleSendMessage = async () => {
    const aiResponse = await sendChatMessage(conversationId, userInput);
    setAiMessage(aiResponse.data);
  }

  // handleSendMessage();

  // const smaller_markdown = "Ways to climb: \n  1. 1+1+1+1\n  2. 1+1+2\n  3. 1+2+1\n  4. 2+1+1  \n  5. 2+2\n\n"
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ModeToggle></ModeToggle>

      <Button onClick={async () => {
        await handleSendMessage();
      }}>click me</Button>
      <Card>
        <CardContent style={{ whiteSpace: 'pre' }}>
          {aiMessage}
        </CardContent>
      </Card>

    </ThemeProvider>
  )
}

export default App
