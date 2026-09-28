import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

// BASE_URL is "/" locally and on Netlify/Vercel, "/<repo>/" on GitHub Pages.
// Router paths stay root-relative either way. Trailing slash must go, or
// basename="/b2c-app/" makes every route resolve one level deep.
const basename = import.meta.env.BASE_URL.replace(/\/$/, '')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
