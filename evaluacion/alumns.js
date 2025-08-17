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

function filterBySurname(surname) {
  return alumns.filter(alumn => alumn.surname === surname);
}

export default filterBySurname;