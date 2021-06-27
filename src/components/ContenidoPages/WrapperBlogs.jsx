import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./WrapperPages.scss"
import PreviewBlog from "../Blog/PreviewBlog"
const WrapperBlogs = () => {
  const Blogs = useStaticQuery(graphql`
    query {
      allDatoCmsArticulo {
        nodes {
          titulo
          id
          slug
          contenido
          autor
          publicado
          imagen {
            fluid(maxWidth: 1200) {
              ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)
  const ArrayBlogs = Blogs.allDatoCmsArticulo.nodes
  return (
    <div className="wrapperPage">
      <h2 className="titlePage">Blog</h2>
      <div className="wrapperBlogs">
        {ArrayBlogs.map(blog => {
          return <PreviewBlog key={blog.id} blog={blog} />
        })}
      </div>
    </div>
  )
}

export default WrapperBlogs
