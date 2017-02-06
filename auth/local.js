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

passport.use(new LocalStrategy(options, (email, password, done) => {
  // checks to see if the email exists in the database
  models.Users.findAll({
    where: {
      email
    }
  })
  .then((users) => {
    if (users[0] === undefined) {
      return done(null, false);
    }
    // compares the password entered to the password in the database
    if (!authHelpers.comparePass(password, users[0].dataValues.password)) {
      return done(null, false);
    } else {
      return done(null, users[0].dataValues);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;
