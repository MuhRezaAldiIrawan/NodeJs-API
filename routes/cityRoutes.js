const express = require('express');
const router = express.Router();
const cities = require('../controllers/cityControllers');
const basicAuthMiddleware = require('../middleware/auth_access');

router.use(basicAuthMiddleware);

// Create a new Item
router.post('/cities', cities.addCity);

// Retrieve all cities
router.get('/cities', cities.getAllCities);

// Retrieve a single Item with itemId
router.get('/cities/:citiesId', cities.getCityById);

// Update an Item with itemId
router.put('/cities/:itemId', cities.updateCity);

// Delete an Item with itemId
router.delete('/cities/:itemId', cities.deleteCity);

module.exports = router;