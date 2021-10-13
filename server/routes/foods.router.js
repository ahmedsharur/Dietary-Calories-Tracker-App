const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route foods
 */
  // GET route code here
// Get all of the foods in the food
 
router.get('/', (req, res) => {
  console.log('')
  pool.query(`SELECT * FROM "food"`)
  .then((results) => res.send(results.rows))
  .catch((error) => {
    console.log('Error making GET request:', error);
    res.sendStatus(500);
  });
});


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
