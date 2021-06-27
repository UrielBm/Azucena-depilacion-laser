import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Horario = () => {
    const Horario  = useStaticQuery(graphql`
    query  {
        allDatoCmsFinDeSemana {
          nodes {
            titulo
            horario
          }
        }
        allDatoCmsSemana {
            nodes {
              titulo
              horario
            }
          }
      }
  `)
  const {titulo,horario} =Horario.allDatoCmsFinDeSemana.nodes[0];
  const tituloSemana=Horario.allDatoCmsSemana.nodes[0].titulo;
  const horarioSemana=Horario.allDatoCmsSemana.nodes[0].horario;
    return (
        <div className="Horarios">
         <div className="horarioSemana">
        <h3>{tituloSemana}</h3>
            <p>{horarioSemana}</p>
        </div>
        <div className="horarioFinSemana">
            <h3>{titulo}</h3>
            <p>{horario}</p>
        </div>
        </div>
    )
}

export default Horario
