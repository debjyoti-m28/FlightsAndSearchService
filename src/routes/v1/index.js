const express = require("express");
const CityController = require("../../controllers/city-controller");
const FlightController = require("../../controllers/flight-controller");
const { FlightMiddleware } = require("../../middlewares/index");
const router = express.Router();

//city
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);


//flight
router.post('/flights', FlightMiddleware.validateCreateFlight , FlightController.create);
router.get('/flights/:id', FlightController.get);
router.get('/flights', FlightController.getAll);

module.exports = router;