import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './pages/Experience.jsx'
import './index.css'
import '../styles/style.css'

// Component Imports
import Navbar from './components/navbar.jsx'
import Cursor from './components/customCursor.jsx'
import About from './pages/About.jsx'
import Experiences from './pages/Experiences.jsx'
import Awards from './pages/Awards.jsx'
import Contacts from './pages/Contacts.jsx'
import StarsCanvas from './pages/StarsCanvas.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))


root.render(
  <>
    <div className='relative z-0'>
      {/* <Cursor /> */}
      <Navbar />
      <Experience />
      <About />
      <Experiences />
      <Awards />

      <section className='relative z-0 bg-blue-black-gradient'>
        <Contacts />
        <StarsCanvas />
      </section>

    </div>
  </>
)