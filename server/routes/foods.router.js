const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route foods
 */
  // GET route code here
// Get all of the foods in the food
 
router.get('/', (req, res) => {
  pool.query(`SELECT * FROM "food"`)
  .then((results) => res.send(results.rows))
  .catch((error) => {
    console.log('Error making GET request:', error);
    res.sendStatus(500);
  });
});

// Create a get route for selected food
//select from user_food join food

router.get('/select', (req, res) => {
  pool.query(`SELECT * FROM user_food JOIN food ON user_food.food_id = food.id`)
  .then((results) => res.send(results.rows))
  .catch((error) => {
    console.log('Error making GET request:', error);
    res.sendStatus(500);
  });
});

router.post('/select', (req, res) => {
  //INSERT INTO user_food
  console.log(req.body)
  const queryText = `INSERT INTO "user_food" ("user_id", 
  "food_id") VALUES ($1, $2);`;
  pool.query(queryText, [ req.body.user_id])
     .then((response) => {
       res.sendStatus(200);
     }).catch((error ) => {
       console.log('ERROR POSTING TO DB', error)
       res.sendStatus(500);
     });
});

/**
 * POST route food
//  */
// router.post('/', (req, res) => {
//   // POST route code here
//   const payload = req.body;
//   console.log(payload);
//   const queryText = `INSERT INTO "food" ("food_name", 
//   "user_id", "carbs", "sugar", "fat", "protein", 
//   "calorie_total") VALUES ($1, $2, $3, $4, $5, $6, $7);`;
//   pool.query(queryText, [payload.food_name, payload.user_id, 
//     payload.carbs, payload.sugar, payload.fat,
//      payload.protein, payload.calorie_total])
//      .then((response) => {
//        res.sendStatus(201);
//      }).catch((error ) => {
//        console.log('ERROR POSTING TO DB', error)
//        res.sendStatus(500);
//      });
// });

module.exports = router;
