console.log('Hello Universe')
const express = require('express')
const app = express()
const port = 1535
Let counter = 0

app.use(express.static('public'));

app.get('/hello', (req, res) => res.send('Hello Maschmedt!'))

app.post('/counter', function (req, res) {
counter = counter + 1
  res.send('Counter ' + counter)
})


app.post('/counter', function (req, res) {
counter = counter + 1
  res.send('Date ' + d)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

