import React from "react"
import WrapperUbicacion from "../components/ContenidoPages/WrapperUbicacion"
import Layout from "../components/Layout"
import "./Style.scss"
const ubicacion = () => {
  return (
    <Layout>
      <main className="wrapperMain">
        <WrapperUbicacion />
      </main>
    </Layout>
  )
}

export default ubicacion
