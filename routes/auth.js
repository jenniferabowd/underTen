// requires the express node
const express = require('express');
// requires the express router node
const router = express.Router();

// requires the authHelpers file
const authHelpers = require('../auth/auth-helpers');
// requires the local file
const local = require('../auth/local');

// renders the register page
router.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
})

// allows user to create an account and sends the data to the tables
router.post('/register', (req, res, next) => {
  return authHelpers.createUser(req, res)
  .then((response) => {
    console.log('registration successful');
  })
  .catch((error) => {res.status(500).json({ status: 'error' }); });
});

// loads the login page
router.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login');
});

// route handler based on if the user is logged in
router.post('/login', local.authenticate('local', {
    successRedirect: '/meals',
    failureRedirect: '/auth/login',
    failureFlash: true
  })
);

// logout
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
