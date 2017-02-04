// requires the passport file
const passport = require('passport');
// calls the database index
const models = require('../db/models/index');

// exports the user id to the passport
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  // checks to see if the user is authorized
  passport.deserializeUser((id, done) => {
    models.Users.findById(id)
    .then((user) => { done(null, user); })
    .catch((err) => { done(err, null); });
  });
};
