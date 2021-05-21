import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "./Paquete.scss"
export const PreviewPaquetes = ({ paquete }) => {
  const { imagen, precio, slug, titulo } = paquete
  return (
    <div className="wrapperCard">
      <div className="Card">
        <div className="WrapperImg">
          <Image fluid={imagen.fluid} className="img" alt="paqueteImg" />
        </div>
        <div className="WrapperInformation">
          <div className="InfoPaquete">
            <p className="paqueteTitulo">{titulo}</p>
            <p className="slug">{slug}</p>
          </div>
          <div className="wrapperPrecio">
            <p className="Precio">$ {precio}</p>
          </div>
        </div>
      </div>
      <div className="WrapperButton">
        <Link to={slug} className="LinkButton">
          + información
        </Link>
      </div>
    </div>
  )
}
