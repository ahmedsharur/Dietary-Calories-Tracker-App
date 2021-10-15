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
  pool.query(`SELECT * FROM 
  user_food JOIN food ON 
  user_food.food_id = food.id JOIN "user" ON 
  user_food.user_id = "user".id`)
  .then((results) => {
  console.log('get the selected food', results.rows)
  res.send(results.rows)})
  .catch((error) => {
    console.log('Error making GET request:', error);
    res.sendStatus(500);
  });
});

router.post('/select', (req, res) => {
  //INSERT INTO user_food
  console.log(req.body)
  const queryText = `INSERT INTO "user_food" ("user_id", 
  "food_id", "date") VALUES ($1, $2, CURRENT_TIMESTAMP);`;
  pool.query(queryText, [ req.body.user_id, req.body.id])
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
router.post('/', (req, res) => {
  // POST route code here
  const payload = req.body;
  console.log(payload);
  const queryText = `INSERT INTO "food" ("food_name", 
  "user_id", "carbs", "sugar", "fat", "protein" )
   VALUES ($1, $2, $3, $4, $5, $6);`;
  pool.query(queryText, [payload.food_name, payload.user_id,
    payload.carbs, payload.sugar, payload.fat,
     payload.protein])
     .then((response) => {
       res.sendStatus(201);
     }).catch((error ) => {
       console.log('ERROR POSTING TO DB', error)
       res.sendStatus(500);
     });
});


router.delete('/:id', (req, res) => {
    // endpoint functionality - delete by id
    const foodID = req.params.id;
    console.log(foodID)
    const queryText = `DELETE FROM "food" WHERE "id" = $1;`;
    pool.query(queryText, [foodID])
    .then((response) => {
      res.sendStatus(201);
    }).catch((error) => {
      console.log('Error deleting food with ID', foodID)
      res.sendStatus(500)
    });
});

module.exports = router;
