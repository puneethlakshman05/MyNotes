import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import reportWebVitals from './reportWebVitals.js'
import  {BrowserRouter } from 'react-router-dom'
import { NotesProvider } from './pages/context/notes-context.jsx'

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <BrowserRouter>
    <NotesProvider>
       <App />
    </NotesProvider>
    </BrowserRouter>
  </StrictMode>
)
