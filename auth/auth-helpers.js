// encrypts the stored password in the database
const bcrypt = require('bcryptjs');
// calls the database index
const models = require('../db/models/index');

 // this checks to see if the user's password matches the database password
 function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
 }

 // middleware that we wrote to say that the user is already logged in
function loginRedirect(req, res, next) {
  if (req.user) return res.status(401).json(
    { status: 'You are already logged in' }
  );
  // calls the next middleware to do what it needs to do
  return next();
}

// creates the user and encrypts their password
function createUser(req, res) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  return models.Users.create({
    email: req.body.email,
    password: hash,
    firstName: req.body.first_name,
    lastName: req.body.last_name,
    course: req.body.course
  }).then(() => {
    // sends them to the meal page after creating the account
    res.redirect('/meals');
  });
}

// redirects unlogged in users to login
function loginRequired(req, res, next) {
  if (!req.user) return res.status(401).json({ status: 'Please log in to find the meals'});
  return next();
}

module.exports = {
  comparePass,
  loginRedirect,
  loginRequired,
  createUser
}
