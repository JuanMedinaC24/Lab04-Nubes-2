const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación de Express!')
})

app.get('/clientes', (req, res) => {
  const clientes = ['Juan', 'Kelvin', 'Bruno']
  res.send(clientes)
})

app.get('/productos', (req, res) => {
  const productos = ['InkaCola', 'CocaCola', 'Sprite']
  res.send(productos)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`La aplicación está corriendo en el puerto ${PORT}`)
})
