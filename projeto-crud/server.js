const express = require('express')
const app = express()
const port = 3000

//informar o caminho dos arquivos estáticos

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

//conectar ao banco

const connection = require('./db')

//ROTA PRINCIPAL
app.get('/', (req, res) => {
  res.send('Hello World!')
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
  //cd projeto-crud/public/index.html
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})