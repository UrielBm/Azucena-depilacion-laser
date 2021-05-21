import React from "react"
import Content from "../General/Content"
import Image from "gatsby-image"
import { Link } from "gatsby"
import "./Blog.scss"
const PreviewBlog = ({ blog }) => {
  const { titulo, slug, contenido, imagen, autor, publicado } = blog

  return (
    <article className="previewBlog">
      <h4 className="titleBlog">{titulo}</h4>
      <div className="wrapperInfoAutor">
        <p>Autor: {autor}</p>
        <p>Publicado: {publicado}</p>
      </div>
      <div className="wrapperPreviewContent">
        <Content description={contenido} />
      </div>
      <div className="wrapperLink">
        <Link to={slug} className="LinkButton">
          Leer artículo completo
        </Link>
      </div>
      <div className="wrapperPreviewImg">
        <Image fluid={imagen.fluid} className="PreviewImg" alt="paqueteImg" />
      </div>
    </article>
  )
}

export default PreviewBlog
