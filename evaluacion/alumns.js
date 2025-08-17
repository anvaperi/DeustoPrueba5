const alumns = [{
  "surname": 'Fulanítez'
},{
  "surname": 'Fulanítez'
},{
  "surname": 'Menganítez'
},{
  "surname": 'Zutanítez'
},{
  "surname": 'Perenganítez' 
}];

function filterBySurname(req, res, next) {
  req.filteredAlumns = alumns.filter(
    alumn => alumn.surname === req.query.surname
  );
  next();
}

export default filterBySurname;