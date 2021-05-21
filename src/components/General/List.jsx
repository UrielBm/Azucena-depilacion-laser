import React from "react"

const List = ({ list }) => {
  return (
    <ol>
      {list.map((item, index) => {
        return <li key={index}>{item}</li>
      })}
    </ol>
  )
}

export default List
