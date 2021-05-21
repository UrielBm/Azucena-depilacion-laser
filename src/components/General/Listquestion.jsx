import React from "react"

const Listquestion = ({ arrayQuestion }) => {
  return (
    <ul className="listQuestion">
      {arrayQuestion.map((item, index) => {
        return (
          <li key={`${item.type}-${index}`} className={item.type}>
            {item.value}
          </li>
        )
      })}
    </ul>
  )
}

export default Listquestion
