const RoomService = require('../models/RoomService');

class RoomServiceController {
    // [POST] ROOMSERVICE
    async newRoomService(req, res) {
        const object = await RoomService.create(req.body);
        return res.json(object);
    }
    // [GET] ROOMSERVICES
    async roomServices(req, res) {
        const services = await RoomService.find();
        res.send(services);
    }
}

module.exports = new RoomServiceController();