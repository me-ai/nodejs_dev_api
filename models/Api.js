const mongoose = require('mongoose');

const ApiSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please enter text']
    },
    amount: {
        type: Number,
        required: [true, 'Numberical Entry require. Can be Positive or Negative']

    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Api', ApiSchema);