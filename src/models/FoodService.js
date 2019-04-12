const mongoose = require('mongoose');

const FoodService = new mongoose.Schema({
    room_number: Number,
    food: {
        amount: Number,
        value: Number,
        name: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('FoodService', FoodService);