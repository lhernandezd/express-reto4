const express = require('express');
const app = express();

//Ruta
app.get('/makers/:nombre', (req,res) => {
  const word = req.params.nombre[0].toUpperCase() + req.params.nombre.slice(1);
  res.send(`<h1>Hola ${word}!</h1>`);
});

//Puerto
app.listen(3000, () => {
  console.log('Listening on port 3000!');
});