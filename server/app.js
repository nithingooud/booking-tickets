const express = require('express');
const { mongoose } = require('./db/mongoose');
const bodyParser = require('body-parser');
const Seat = require('./db/models/seats.model');

const app = express();

app.use(express.json());

// POST route to book seats
// POST route to book seats
app.post('/seats/book', async (req, res) => {
    const { numberOfSeats } = req.body;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const seats = await Seat.find({ isBooked: false })
            .limit(numberOfSeats)
            .session(session)
            .exec();

        if (seats.length < numberOfSeats) {
            res.status(400).json({ error: 'Not enough available seats' });
            session.abortTransaction();
        } else {
            const seatIds = seats.map(seat => seat._id);

            await Seat.updateMany(
                { _id: { $in: seatIds }, isBooked: false },
                { isBooked: true },
                { session }
            );

            const bookedSeats = seats.map(seat => ({
                seatId: seat._id,
                row: seat.row,
                seatNumber: seat.seatNumber
            }));

            await session.commitTransaction();
            res.json({ bookedSeats: bookedSeats });
        }
    } catch (error) {
        console.error('Error booking seats:', error);
        await session.abortTransaction();
        res.status(500).json({ error: 'Failed to book seats' });
    } finally {
        session.endSession();
    }
});




app.listen(3000, () => {
    console.log('Server listening on port 3000.');
});
