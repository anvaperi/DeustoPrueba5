import express from 'express';
import filterBySurname from './alumns.js';

const app = express();
const port = 3000;

app.get('/surname', filterBySurname, (req, res) => {
  res.send(req.filteredAlumns);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
})