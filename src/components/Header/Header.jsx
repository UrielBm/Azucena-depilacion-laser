import React, { useState } from "react"
import Nav from "../Navigation/Nav"
import Logo from "../../images/logo.png"
import NavPhone from "../Navigation/NavPhone"
import Contact from "../General/Contact"
import { Link } from "gatsby"
import Horario from "../General/Horario"
import { Sling as Hamburger } from "hamburger-react"
import "./Header.scss"
const Header = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <header className="wrapperHeader">
        <div className="wrapperLogo">
          <Link to="/">
            <img src={Logo} className="logo" alt="logo" />
          </Link>
        </div>
        <div className="wrapperMenu">
          <section className="HamburgerMenu">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              size={25}
              duration={0.8}
              color="#d36aac"
            />
          </section>
          <section className="wrapperNav">
            <Nav />
          </section>
        </div>
        <section className="wrapperHorario">
          <p className="title">Horario:</p>
          <Horario />
        </section>
        <section className="wrapperContact">
          <p className="title">Contactame:</p>
          <Contact />
        </section>
      </header>
      {isOpen && <NavPhone />}
    </>
  )
}

export default Header
