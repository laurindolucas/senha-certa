import { useState } from 'react'
import Card from './components/card'
import './index.css'
import Text from './components/text'
import Container from './components/container'

function App() {
  return (
    <Container>
      <div className="min-h-screen bg-background text-foreground p-10">
        <Card size="md" className="mt-6">
          Com padding
        </Card>
        </div >
    </Container>
  

  )
}


export default App
