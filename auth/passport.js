// requires the passport file
const passport = require('passport');
// requires the database index
const models = require('../db/models/index');

// exports the user id to the passport
module.exports = () => {
  passport.serializeUser((users, done) => {
    done(null, users.id);
  });
  // checks to see if the user is authorized
  passport.deserializeUser((id, done) => {
    models.Users.findById(id)
    .then((users) => { done(null, users); })
    .catch((err) => { done(err, null); });
  });
};
