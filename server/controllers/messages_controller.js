let messages = []
let id = 0

module.exports = {
  createMessages: (req, res) => {
    const { text, time } = req.body
    messages.push({ id, text, time })
    id++
    res.status(200).send(messages)

  },

  readMessages: (req, res) => {
    res.status(200).send(messages)
  },

  updateMessages: (req, res) => {
    const { text } = req.body
    const idCheck = req.params.id
    const messageIndex = messages.findIndex(element => element.id === +idCheck)

    let modifiedMessage = messages[messageIndex]

    messages[messageIndex] = {
      id: modifiedMessage.id,
      text: text || modifiedMessage.text,
      time: modifiedMessage.time,
    }
    res.status(200).send(messages)
  },

  deleteMesssages: (req, res) => {
    const { id } = req.params
    const messageIndex = messages.findIndex(element => element.id === +id)
    messages.splice(messageIndex, 1)
    res.status(200).send(messages)
  },
}