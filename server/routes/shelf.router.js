const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const sqlQuery=`SELECT * from "item"`
  
  pool.query(sqlQuery).then((result) => {
    res.send(result.rows);
    }).catch((error) => {
      console.log('Error in get', error);
      res.sendStatus(500);
    })
});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  
  const sqlQuery=`
  INSERT INTO "item" (description, image_url, user_id)
  VALUES ($1, $2, $3);
  `;
  console.log('')
  const sqlParams=[req.body.description, req.body.image_url, req.user.id];

  pool.query(sqlQuery, sqlParams)
    .then(() => {
      console.log('made it to the then')
      res.sendStatus(201)
    }).catch((error) => {
      console.log('Error in post', error);
      res.sendStatus(500);
    })

});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', rejectUnauthenticated, (req, res) => {
  console.log('body is', req.user.id)

  // endpoint functionality
  sqlQuery = `
  DELETE FROM item
  WHERE id = $1
  AND user_id = $2
  RETURNING *; 
`;
sqlParams = [
  req.params.id,
  req.user.id,
];
pool.query(sqlQuery, sqlParams)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing DELETE shelf query', err);
      res.sendStatus(500);
    });
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  // endpoint functionality
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  // endpoint functionality
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  // endpoint functionality
});

module.exports = router;
