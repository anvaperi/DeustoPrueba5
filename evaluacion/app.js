import express from 'express';
import filterBySurname from './alumns.js';
import validateSurname from './middleware/validation.js';

const app = express();
const port = 3000;

app.get('/surname', validateSurname, (req, res) => {
  const filteredAlumns = filterBySurname(req.query.surname); 
  res.status(200).send(filteredAlumns);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
})