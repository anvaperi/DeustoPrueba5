const alumns = [{
  "surname": 'Fulanítez'
}, {
  "surname": 'Fulanítez'
}, {
  "surname": 'Menganítez'
}, {
  "surname": 'Zutanítez'
}, {
  "surname": 'Perenganítez'
}];

function getWithSurname(targetSurname) {
  return alumns.filter(alumn => alumn.surname === targetSurname);
}

export default getWithSurname;