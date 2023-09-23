import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './pages/Hero.jsx'
import './index.css'
import '../styles/style.css'

// Component Imports
import Navbar from './components/navbar.jsx'
import Cursor from './components/customCursor.jsx'
import About from './pages/About.jsx'
import Experiences from './pages/Experiences.jsx'
import Hero from './pages/Hero.jsx'
import Awards from './pages/Awards.jsx'
import Contacts from './pages/Contacts.jsx'
import StarsCanvas from './pages/StarsCanvas.jsx'
import Loading from './pages/Loading.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

{/* <Cursor /> */ }

root.render(
  <>
    <Suspense fallback={<Loading />}>
      <div className='relative z-0'>
        <Navbar />
        <Hero />
        <About />
        <Experiences />
        <Awards />


        <section className='relative z-0 bg-blue-black-gradient'>
          <Contacts />
          <StarsCanvas />
        </section>
      </div>
    </Suspense>


  </>
)