import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import "./WrapperService.scss"
const WrapperServices = () => {
  const Services = useStaticQuery(graphql`
    query {
      allDatoCmsServicio {
        nodes {
          id
          titulo
          descripcion
          precio
        }
      }
    }
  `)
  const ArrayServicios = Services.allDatoCmsServicio.nodes
  return (
    <div>
      <h3 className="title">Servicios:</h3>
      <div className="wrapperServicios">
        {ArrayServicios.map(service => {
          return (
            <div key={service.id} className="Servicio">
              <div className="wrapperInfoServicio">
                <p className="serviceTitle">{service.titulo}</p>
                <p className="serviceDescription">{service.descripcion}</p>
              </div>
              <div className="WrapperPrecio">
                <p className="precio">${service.precio}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WrapperServices
