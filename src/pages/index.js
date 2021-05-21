import React from "react"
import Hero from "../components/Hero/Hero"
import WrapperInicioPage from "../components/ContenidoPages/WrapperInicioPage"
import WrapperServices from "../components/Servicios/WrapperServices"
import Layout from "../components/Layout"
import WrapperPaquetes from "../components/Paquetes/WrapperPaquetes"
import FormasPago from "../components/FormasPago/FormasPago"
import "./Style.scss"
const IndexPage = () => {
  return (
    <Layout>
      <main className="wrapperMain">
        <Hero />
        <WrapperInicioPage />
        <WrapperPaquetes />
        <WrapperServices />
        <FormasPago />
      </main>
    </Layout>
  )
}

export default IndexPage
