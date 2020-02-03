import { Schema } from 'mongoose';

const CostSchema = new Schema({
    type: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    value: {
        type: Number,
        required: true
    },
    createAt: {
        type: String,
        default: Date.now
    },
});

export default CostSchema;

