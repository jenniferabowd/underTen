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
    usernameField: 'email'},
     (username, password, done) => {
      console.log(username)
  models.Users.findOne({
    where: {
      email: username
  }
  })
  .then((user) => {
    console.log(user, password)
    if (!user) {
      return done(null, false);
    }
    // compares the password entered to the password in the database
    if (!authHelpers.comparePass(password, user.dataValues.password)) {
      console.log("seems like password isn't being validated");
      return done(null, false);
    } else {
      console.log("here password", password, users[0].dataValues.password)
      return done(null, user.dataValues);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;
