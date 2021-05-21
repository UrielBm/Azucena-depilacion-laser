import React, { useEffect, useState } from "react"
import FormatContet from "../helpers/FormatContent"
import "./General.scss"
const Content = ({ description }) => {
  const [descripcion, Setdescripcion] = useState([])
  useEffect(() => {
    if (description) {
      const descriptionFormart = FormatContet(description)
      Setdescripcion(descriptionFormart)
    }
  }, [description])
  return (
    <section className="wrapperDescription">
      {descripcion.map(({ type, dato }, index) => {
        return (
          <article key={`${type}-${index}`} className="description">
            {type === "parrafo" ? (
              <p className="parrafo">{dato}</p>
            ) : (
              <h3 className="titleData">{dato}</h3>
            )}
          </article>
        )
      })}
    </section>
  )
}

export default Content
