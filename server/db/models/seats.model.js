const mongoose = require('mongoose');

const seatSchema = new mongoose.Schema({
    row: {
        type: Number,
        required: true
    },
    seatNumber: {
        type: Number,
        required: true
    },
    isBooked: {
        type: Boolean,
        default: false
    }
});

// Define the Seat model
const Seat = mongoose.model('Seat', seatSchema);

module.exports = Seat;
