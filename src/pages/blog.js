import React from "react"
import WrapperBlogs from "../components/ContenidoPages/WrapperBlogs"
import Layout from "../components/Layout"
import "./Style.scss"
const blog = () => {
  return (
    <Layout>
      <main className="wrapperMain">
        <WrapperBlogs />
      </main>
    </Layout>
  )
}

export default blog
