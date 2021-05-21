import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Content from "../General/Content"
import "./WrapperPages.scss"

const WrapperNosotros = () => {
  const Nosotros = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slug: { eq: "nosotros" } }) {
        nodes {
          titulo
          descripcion
          imagen {
            fluid {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  const { titulo, descripcion, imagen } = Nosotros.allDatoCmsPagina.nodes[0]
  return (
    <div className="wrapperPage">
      <h2 className="titlePage">{titulo}</h2>
      <div className="wrapperInfo">
        <Content description={descripcion} />
        <Image fluid={imagen.fluid} className="img" />
      </div>
    </div>
  )
}

export default WrapperNosotros
