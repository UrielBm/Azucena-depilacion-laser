import React from "react"
import WrapperNosotros from "../components/ContenidoPages/WrapperNosotros"
import Layout from "../components/Layout"
import "./Style.scss"
const nosotros = () => {
  return (
    <Layout>
      <main className="wrapperMain">
        <WrapperNosotros />
      </main>
    </Layout>
  )
}

export default nosotros
