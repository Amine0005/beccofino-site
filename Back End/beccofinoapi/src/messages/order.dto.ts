import { Schema, model } from "mongoose";

export interface OrderDto {
    confirmationCode: string;
    nome: string;
    prefissoValue: string;
    numeroValue: string;
    numPersoneValue: number;
    dataPrenotazioneValue: Date;
    orarioPrenotazioneValue: string;
    descrizioneValue : string;
}

// create an schema
const OrderSchema = new Schema<OrderDto>({
    confirmationCode: { type: String, required: true },
    nome: { type: String, required: true },
    prefissoValue:  { type: String, required: true },
    numeroValue:  { type: String, required: true },
    numPersoneValue:  { type: Number, required: true },
    dataPrenotazioneValue:  { type: Date, required: true },
    orarioPrenotazioneValue:  { type: String, required: true },
    descrizioneValue:  { type: String, required: false },
});

var OrderModel = model('Order', OrderSchema);

export default OrderModel;

