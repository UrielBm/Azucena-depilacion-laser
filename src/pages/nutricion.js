import React from "react"
import WrapperNutricion from "../components/ContenidoPages/WrapperNutricion"
import Layout from "../components/Layout"
import "./Style.scss"
const nutricion = () => {
    return (
    <Layout>
      <main className="wrapperMain">
        <WrapperNutricion />
      </main>
    </Layout>
    )
}

export default nutricion
