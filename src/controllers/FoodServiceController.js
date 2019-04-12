const FoodService = require('../models/FoodService');

class FoodServiceController {
    //[POST] FOODSERVICE
    async newFoodService(req, res) {
        const object = await FoodService.create(req.body);
        return res.json(object);
    }
    // [GET] FOODSERVICE
    async listFoodService(req, res) {
        const services = await FoodService.find();
        return res.send(services);
    }
}

module.exports = new FoodServiceController();