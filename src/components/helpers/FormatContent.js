const FormatContet = description => {
  let ArrayData = description.split("\n").join("#")
  ArrayData = ArrayData.split("#")
  ArrayData = ArrayData.filter(dato => dato !== "")
  const response = ArrayData.map((dato, index) => {
    return index % 2 === 0
      ? { type: "parrafo", dato: dato }
      : { type: "titulo", dato: dato }
  })
  return response
}
export default FormatContet
