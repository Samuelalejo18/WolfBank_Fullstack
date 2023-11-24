const mongoose = require('mongoose');

const movementsSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    balanceAfterTransaction: {
        type: Number,
        required: true,
    },
    transactionType: {
        type: String,
        enum: ['deposit', 'withdraw', 'transfer'],
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const Movement = mongoose.model("movement", movementsSchema);

module.exports = Movement;
