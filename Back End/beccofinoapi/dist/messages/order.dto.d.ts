/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Schema } from "mongoose";
export interface OrderDto {
    confirmationCode: string;
    nome: string;
    prefissoValue: string;
    numeroValue: string;
    numPersoneValue: number;
    dataPrenotazioneValue: Date;
    orarioPrenotazioneValue: string;
    descrizioneValue: string;
}
declare var OrderModel: import("mongoose").Model<OrderDto, {}, {}, {}, import("mongoose").Document<unknown, {}, OrderDto> & OrderDto & {
    _id: import("mongoose").Types.ObjectId;
}, Schema<OrderDto, import("mongoose").Model<OrderDto, any, any, any, import("mongoose").Document<unknown, any, OrderDto> & OrderDto & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, OrderDto, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<OrderDto>> & import("mongoose").FlatRecord<OrderDto> & {
    _id: import("mongoose").Types.ObjectId;
}>>;
export default OrderModel;
