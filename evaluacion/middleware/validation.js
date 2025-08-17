function validateSurname(req, res, next) {
  // Any digits in the surname?
  if (/\d/.test(req.query.surname)) {
    res.status(400).send(
      '¡Error: No se admiten dígitos en el apellido!'
    );
  }
  next();
}

export default validateSurname;
