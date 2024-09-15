import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/css/index.css'
import './assets/css/bootstrap.min.css'
import './assets/css/magnific-popup.css'
import './assets/css/custom.css'
import './assets/css/slicknav.min.css'
import './assets/css/animate.css'
import './assets/css/swiper-bundle.min.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
