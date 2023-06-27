import React from 'react'
import { Navbar, Header, About } from './components'
import './index.scss'

const App = () => {
  return (
    <div className="root">
      <div className="root__main-container">
        <Navbar />
        <Header />
        <About />
      </div>
    </div>
  )
}

export default App
