import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Content from "../General/Content"
import Links from "../General/Links"
import "./WrapperPages.scss"
const WrapperUbicacion = () => {
  const Ubicacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "ubicacion" } }) {
        nodes {
          titulo
          descripcion
          link
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  const {
    titulo,
    descripcion,
    link,
    imagen,
  } = Ubicacion.allDatoCmsPagina.nodes[0]
  return (
    <div className="wrapperPage">
      <h2 className="titlePage">{titulo}</h2>
      <div className="wrapperInfo">
        <div>
          <Content description={descripcion} />
          <Links link={link} text="Ubicación" />
        </div>
        <Image fluid={imagen.fluid} className="img" />
      </div>
    </div>
  )
}

export default WrapperUbicacion
