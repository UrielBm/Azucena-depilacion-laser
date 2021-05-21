import React from "react"
import Bank from "../../images/Icons/bank.svg"
import Cash from "../../images/Icons/money.svg"
import Card from "../../images/Icons/creditCard.svg"
import "./Pago.scss"
const FormasPago = () => {
  return (
    <div className="wrapperFormas">
      <h3 className="title">Métodos de pago</h3>
      <div className="wrapperMetodos">
        <div className="Method">
          <img src={Cash} alt="cash logo" className="iconMethod" />
          <p className="textMetod">Efectivo</p>
        </div>
        <div className="Method">
          <img src={Bank} alt="cash logo" className="iconMethod" />
          <p className="textMetod">Trasferencia Bancaria</p>
        </div>
        <div className="Method">
          <img src={Card} alt="cash logo" className="iconMethod" />
          <p className="textMetod">Tarjeta</p>
        </div>
      </div>
    </div>
  )
}

export default FormasPago
