import React from "react"
import facebook from "../../images/Icons/facebook.svg"
import instagram from "../../images/Icons/instagram.svg"
import twitter from "../../images/Icons/twitter.svg"
import useSeo from "../Hooks/useSeo"
import "./SocialNetwork.scss"
const SocialNetwork = () => {
  const seo = useSeo()
  const { facebookPageUrl } = seo
  return (
    <section className="wrapperSocialNetworks">
      <a href={facebookPageUrl} target="_blank" rel="noreferrer">
        <img src={facebook} className="icon" alt="Facebook" />
      </a>
      <a
        href="https://www.instagram.com/azucena.clinicalaser/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={instagram} className="icon" alt="Intagram" />
      </a>
      <a
        href="https://twitter.com/ClinicaAzucena"
        target="_blank"
        rel="noreferrer"
      >
        <img src={twitter} className="icon" alt="Twitter" />
      </a>
    </section>
  )
}

export default SocialNetwork
