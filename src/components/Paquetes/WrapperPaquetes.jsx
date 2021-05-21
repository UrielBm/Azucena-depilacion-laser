import React from "react"
import usePaquetes from "../Hooks/usePaquetes"
import { PreviewPaquetes } from "./PreviewPaquetes"
import "./Paquete.scss"
const WrapperPaquetes = () => {
  const paquetes = usePaquetes()
  return (
    <div className="wrapperPaquetes">
      <h3 className="title">Nuestros Paquetes:</h3>
      <div className="wrapperCards">
        {paquetes.map(paquete => {
          return <PreviewPaquetes key={paquete.id} paquete={paquete} />
        })}
      </div>
    </div>
  )
}

export default WrapperPaquetes
