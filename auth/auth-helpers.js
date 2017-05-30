// this file creates the user account and sends the logged in users to the meal page

// encrypts the stored password in the database
const bcrypt = require('bcryptjs');
// calls the database index
const models = require('../db/models/index');

 // this checks to see if the user's password matches the database password
 function comparePass(userPassword, databasePassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
 }

 // middleware that we wrote to take the user to the meals page
function loginRedirect(req, res, next) {
  if (req.users) res.redirect('/meals');
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
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    course: req.body.course
  }).then(() => {
    // sends them to the meal page after creating the account
    res.redirect('/meals');
  });
}

// redirects unlogged in users to login
function loginRequired(req, res, next) {
  if (!req.user) res.redirect('/auth/login');
  return next();
}

module.exports = {
  comparePass,
  createUser,
  loginRedirect,
  loginRequired
}

