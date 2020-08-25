const express = require('express')
const messageCtrl = require('./controllers/messages_controller')

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))


const port = 3001
app.listen(port, () => {
  console.log(`${port} is listening`)
})

app.post('/api/messages', messageCtrl.createMessages)
app.get('/api/messages', messageCtrl.readMessages)
app.put('/api/messages/:id', messageCtrl.updateMessages)
app.delete('/api/messages/:id', messageCtrl.deleteMesssages)
