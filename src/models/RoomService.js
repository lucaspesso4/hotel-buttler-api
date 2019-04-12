const mongoose = require('mongoose');

const RoomService = new mongoose.Schema({
    room_number: Number,
    ttchange: [String]
}, {
    timestamps: true
});

module.exports = mongoose.model('RoomService', RoomService);