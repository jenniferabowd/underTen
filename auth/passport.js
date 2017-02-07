// requires the passport file
const passport = require('passport');
// requires the database index
const models = require('../db/models/index');

// exports the user id to the passport
module.exports = () => {
  passport.serializeUser((users, done) => {
    done(null, users.userid);
  });
  // checks to see if the user is authorized
  passport.deserializeUser((userid, done) => {
    models.Users.findById(userid)
    .then((users) => { done(null, users); })
    .catch((err) => { done(err, null); });
  });
};
