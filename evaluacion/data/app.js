const express = require('express');
const app = express();
const port = 3000;
const getWithSurname = require('./alumns');

app.listen(port, () => {
  conslole.log(`Servidor escuchando en http://localhost:${port}`);
})