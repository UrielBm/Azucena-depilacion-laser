import React from "react"

const Links = ({ link, text }) => (
  <a href={link} target="_blank" className="link" rel="noreferrer">
    {text}
  </a>
)

export default Links
