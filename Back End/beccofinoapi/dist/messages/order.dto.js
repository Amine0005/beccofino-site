"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    confirmationCode: { type: String, required: true },
    nome: { type: String, required: true },
    prefissoValue: { type: String, required: true },
    numeroValue: { type: String, required: true },
    numPersoneValue: { type: Number, required: true },
    dataPrenotazioneValue: { type: Date, required: true },
    orarioPrenotazioneValue: { type: String, required: true },
    descrizioneValue: { type: String, required: false },
});
var OrderModel = (0, mongoose_1.model)('Order', OrderSchema);
exports.default = OrderModel;
//# sourceMappingURL=order.dto.js.map