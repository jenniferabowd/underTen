// this file handles the user logging in. It also fixed the bug where email as a username bug by setting the email to be a username

// requires passport file within auth
const passport = require('passport');
// requires passport-local node
const LocalStrategy = require('passport-local').Strategy;

// creates another passport variable to start passport node, also requires the passport node
const init = require('./passport');
// requires the database index
const models = require('../db/models/index');
// requires the auth helps file from within auth
const authHelpers = require('../auth/auth-helpers');

const options = {};

// starts the passport node
init();

passport.use(new LocalStrategy({
  // fixes the bug where it wasn't letting email be used to login by setting the email to a username
    usernameField: 'email'},
     (username, password, done) => {
  models.Users.findOne({
    where: {
      email: username
  }
  })
  .then((user) => {
    if (!user) {
      return done(null, false);
    }
    // compares the password entered to the password in the database
    if (!authHelpers.comparePass(password, user.dataValues.password)) {
      return done(null, false);
    } else {
      return done(null, user.dataValues);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;

