const AskFrecuently = question => {
  let ArrayQuestionAnswer = question.split("\n")
  const regex = /[0-9]/
  ArrayQuestionAnswer = ArrayQuestionAnswer.map(item => {
    const previo = item.replace(regex, "")
    return previo.replace(". ", "")
  })
  ArrayQuestionAnswer = ArrayQuestionAnswer.map((item, index) => {
    return index % 2 === 0
      ? { type: "question", value: item }
      : { type: "answer", value: item }
  })
  return ArrayQuestionAnswer
}

export default AskFrecuently
