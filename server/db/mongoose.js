const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const Seat = require('./models/seats.model');


mongoose.Promise = global.Promise;

mongoose.connect('mongodb://0.0.0.0:27017/train', { useNewUrlParser: true }).then(() => {
    console.log("connected to mongodb successfully");
    const seats = [];
    const totalRows = 10;
    const seatsPerRow = 7;

    for (let row = 1; row <= totalRows; row++) {
        for (let seatNumber = 1; seatNumber <= seatsPerRow; seatNumber++) {
            const seat = new Seat({
                row: row,
                seatNumber: seatNumber
            });
            seats.push(seat);
        }
    }

    Seat.insertMany(seats)
        .then(savedSeats => {
            console.log('Seats created:', savedSeats.length);
        })
        .catch(error => {
            console.error('Error creating seats:', error);
        });
}).catch((e) => {
    console.log("erroe while connected to mongodb");
})

module.exports = {
    mongoose
}