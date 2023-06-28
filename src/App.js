import { React, useEffect } from 'react'
import { Navbar, Header, About, Projects, Contact } from './components'
import './index.scss'
import { Element, scroller } from 'react-scroll'
import { RiHome2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const App = () => {
  useEffect(() => {
    const smoothScroll = () => {
      const links = document.querySelectorAll('a[href^="#"]')
      links.forEach((link) => {
        link.addEventListener('click', (e) => {
          e.preventDefault()

          const target = document.querySelector(link.getAttribute('href'))
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
            })
          }
        })
      })
    }

    smoothScroll()
  }, [])
  return (
    <div className="root">
      <div className="root__main-container">
        {/* <Navbar /> */}
        <div className="navbar">
          <div className="navbar__container">
            <div className="navbar__container-items">
              <div className="navbar__icon">
                <a href="#home">
                  <RiHome2Line size={20} />
                </a>
              </div>

              <div className="navbar__item">
                <a href="#omnie">
                  <div className="navbar__item-element">O mnie</div>
                </a>
                <a href="#projekty">
                  <div className="navbar__item-element">Projekty</div>
                </a>
                <a href="#kontakt">
                  <div className="navbar__item-element">Kontakt</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="home">
          <Header />
        </div>

        <div id="omnie">
          <About />
        </div>
        <div id="projekty">
          <Projects />
        </div>
        <div id="kontakt">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
