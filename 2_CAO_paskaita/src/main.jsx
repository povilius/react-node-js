import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Button from './components/Button.jsx'
import Hero from './components/Hero.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Hero textColor="white" color="lightblue" title="Info hero" subtitle="Info subtitle"/>
    <App />
    <Button text="Press me!" />
    <Button text="Exit" />
  </React.StrictMode>,
)
