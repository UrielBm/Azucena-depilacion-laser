import React from "react"
import "./General.scss"
const ActionButton = ({ text, onClick }) => (
  <button className="actionButton" onClick={onClick}>
    {text}
  </button>
)

export default ActionButton
