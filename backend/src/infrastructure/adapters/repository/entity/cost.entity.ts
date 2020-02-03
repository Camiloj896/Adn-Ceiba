import { Document } from 'mongoose';

export interface CostEntity extends Document {
    type: string;
    amount: number;
    value: number;
    createAt: string;
}