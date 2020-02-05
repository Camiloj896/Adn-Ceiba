import { Schema } from 'mongoose';

const CostSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        default: 1
    },
    value: {
        type: Number,
        required: true
    },
    totalCost: {
        type: Number,
        default: 0
    },
    createAt: {
        type: Date,
        default: Date.now
    },
});

export default CostSchema;

