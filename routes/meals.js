var express = require('express');
var router = express.Router();

var models = require('../db/models/index');

//Route to get home page
router.get('/', function(req, res, next) {
  models.Meals.findAll({}).then(function(meals) {
    res.render('meals',  {
      meals: meals
    });
  });
});
router.get('/new', function(req, res, next) {
  res.render('new')
});

router.post('/', function(req, res, next) {
  models.Meals.create({
   meal_name: req.body.meal_name,
   amount: req.body.amount,
   restaurant_name: req.body.restaurant_name,
   location: req.body.location,
   review: req.body.review
 }).then(function() {
    res.redirect('/meals')
 });
  });

router.get('/:id', function(req, res, next) {
  models.Meals.findById(req.params.id).then(function(movie) {
   res.render('mealId', {
    meals: meal
    amount: meal.amount,
    restaurant_name: meal.restaurant_name
    location: meal.location
    review: meal.review
   });
  });
});




