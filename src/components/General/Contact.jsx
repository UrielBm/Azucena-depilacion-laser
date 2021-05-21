import React from "react"
import { StaticImage } from "gatsby-plugin-image"
const Contact = ({ paquete = "servicios en general" }) => {
  return (
    <div className="wrapperContact">
      <a
        href={`https://api.whatsapp.com/send?phone=527711297543&text=Me%20gustaría%20saber%20el%20precio%20del%20paquete%20con%20nombre:%20${paquete}`}
        target="_black"
        rel="noreferrer"
        className="wrapperLink"
      >
        <StaticImage
          src={"../../images/Icons/whatsapp.svg"}
          alt="WhatsApp"
          placeholder="blurred"
          layout="fixed"
          width={20}
          height={20}
        />
        <span className="text">WhatsApp</span>
      </a>
    </div>
  )
}

export default Contact
