import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../Layout"
import Createlist from "../helpers/CreateList"
import List from "../General/List"
import AskFrecuently from "../helpers/FrecuentlyAsk"
import Listquestion from "../General/Listquestion"
import Image from "gatsby-image"
import ActionButton from "../General/ActionButton"
import Contact from "../General/Contact"
import "./Paquete.scss"
export const query = graphql`
  query($slug: String!) {
    allDatoCmsPaquete(filter: { slug: { eq: $slug } }) {
      nodes {
        titulo
        descripcion
        indicaciones
        preguntasFrecuentes
        precio
        imagen {
          fluid {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
const Paquete = ({ data }) => {
  const {
    titulo,
    descripcion,
    indicaciones,
    preguntasFrecuentes,
    precio,
    imagen,
  } = data.allDatoCmsPaquete.nodes[0]
  const list = Createlist(indicaciones)
  const ArrayQuestion = AskFrecuently(preguntasFrecuentes)
  const [isOpen, setisOpen] = useState(false)
  const handleOpen = () => {
    if (isOpen) {
      setisOpen(false)
    } else {
      setisOpen(true)
    }
  }
  return (
    <Layout>
      <main className="Paquete">
        <div className="wrapperInfo">
          <h1 className="title">{titulo}</h1>
          <div className="wrapperDescription">
            <p className="description">{descripcion}</p>
          </div>
          <div className="wrapperList">
            <h3 className="titlelist">Recomendaciones:</h3>
            <List list={list} />
          </div>
          <div className="wrapperQuestion">
            <ActionButton
              text="Preguntas frecuentes &#9660;"
              onClick={handleOpen}
            ></ActionButton>
            {isOpen && <Listquestion arrayQuestion={ArrayQuestion} />}
          </div>
          <div className="wrapperContacto">
            <h3 className="titlelist">Contactame:</h3>
            <Contact paquete={titulo} />
          </div>
          <div className="wrapperPrecio">
            <p className="precio">
              <span className="tagPrecio">Precio:</span> ${precio}
            </p>
          </div>
        </div>
        <div className="wrapperImg">
          <Image
            fluid={imagen.fluid}
            alt="imagen del paquete"
            className="imgPromo"
          />
        </div>
      </main>
    </Layout>
  )
}

export default Paquete
