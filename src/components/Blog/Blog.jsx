import React from "react"
import { graphql } from "gatsby"
import Layout from "../Layout"
import Content from "../General/Content"
import Image from "gatsby-image"
export const query = graphql`
  query($slug: String!) {
    allDatoCmsArticulo(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        contenido
        autor
        publicado
        imagen {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
const Blog = ({ data }) => {
  const {
    titulo,
    autor,
    publicado,
    contenido,
    imagen,
  } = data.allDatoCmsArticulo.nodes[0]
  console.log(data.allDatoCmsArticulo.nodes[0])
  return (
    <Layout>
      <article className="article">
        <div className="wrapperGeneralArticle">
          <h2 className="articleTitle">{titulo}</h2>
          <div className="wrapperInfoArticle">
            <p>
              Autor:
              <span className="Autor"> {autor}</span>
            </p>
            <p>
              Publicado:
              <span className="publicado"> {publicado}</span>
            </p>
          </div>
          <div className="wrapperContenido">
            <Content description={contenido} />
          </div>
        </div>
        <div className="wrapperImg">
          <Image fluid={imagen.fluid} className="img" alt="paqueteImg" />
        </div>
      </article>
    </Layout>
  )
}

export default Blog
