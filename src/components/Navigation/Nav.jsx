import React from "react"
import { Link } from "gatsby"
import "./Nav.scss"
const Nav = () => {
  return (
    <nav className="wrapperNav">
      <Link to={"/"} className="link" activeClassName="activePage">
        Inicio
      </Link>
      <Link to={"/nosotros"} className="link" activeClassName="activePage">
        Nosotros
      </Link>
      <Link to={"/tecnologia"} className="link" activeClassName="activePage">
        Tecnología
      </Link>
      <Link to={"/nutricion"} className="link" activeClassName = "activePage">
        Nutrición
        </Link>
      <Link to={"/ubicacion"} className="link" activeClassName="activePage">
        Ubicación
      </Link>
      <Link to={"/blog"} className="link" activeClassName="activePage">
        Blog
      </Link>
    </nav>
  )
}

export default Nav
