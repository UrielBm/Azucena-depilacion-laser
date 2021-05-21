import React from "react"
import SocialNetwork from "../SocialNetwork/SocialNetwork"
import "./Footer.scss"
const Footer = ({ sitename }) => {
  const handleYear = () => {
    const date = new Date()
    const year = date.getFullYear()
    return year
  }
  return (
    <footer className="wrapperFooter">
      <section className="wrapperSubtitle">
        <h3>Siguenos en nuestras Redes Sociales:</h3>
      </section>
      <section className="wrapperSocialNetworks">
        <SocialNetwork />
      </section>
      <section className="wrapperCopy">
        <p>
          CopyRight{" "}
          <span>
            &copy; {handleYear()} {sitename}
          </span>
        </p>
      </section>
    </footer>
  )
}

export default Footer
