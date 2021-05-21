import React from "react"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import Helmet from "react-helmet"
import useSeo from "./Hooks/useSeo"
import "./reset.css"
function Layout(props) {
  const seo = useSeo()
  const {
    fallbackSeo: { description, title },
  } = seo
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <section className="layout">
        <Header />
        {props.children}
        <Footer sitename={title} />
      </section>
    </>
  )
}

export default Layout
