const express = require('express');
const routes = express.Router();
const RoomServiceController = require('./controllers/RoomServiceController');
const FoodServiceController = require('./controllers/FoodServiceController');

// [POST] ROOMSERVICE
routes.post('/new_roomservice', (req, res) => {
    RoomServiceController.newRoomService(req, res);
});
// [GET] ROOMSERVICES
routes.get('/roomservices', (req, res) => {
    RoomServiceController.roomServices(req, res);
});

// [POST] FOODSERVICE
routes.post('/new_foodservice', (req, res) => {
    FoodServiceController.newFoodService(req, res);
});
// [GET] FOODSERVICE
routes.get('/foodservices', (req, res) => {
    FoodServiceController.listFoodService(req, res);
});

module.exports = routes;