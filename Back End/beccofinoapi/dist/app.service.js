"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const order_dto_1 = require("./messages/order.dto");
let AppService = class AppService {
    async handleSingleOrder(order, confirmationCode) {
        const newOrder = new order_dto_1.default({ confirmationCode: confirmationCode, ...order });
        const savedOrder = await newOrder.save();
        const confirmationPageUrl = `http://127.0.0.1:5500/order-confirmation.html?confirmationId=${confirmationCode}`;
        return { status: true, message: confirmationPageUrl };
    }
    async getOrder(confirmationId) {
        const order = await order_dto_1.default.findOne({ confirmationCode: confirmationId }).exec();
        if (!order) {
            return null;
        }
        return order;
    }
    async deleteOrder(confirmationId) {
        const confirmationPageUrl = `http://127.0.0.1:5500/order-cancellation.html?confirmationId=${confirmationId}`;
        const order = await order_dto_1.default.findOneAndDelete({ confirmationCode: confirmationId }).exec();
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        return { status: true, message: confirmationPageUrl };
    }
    async updateOrder(confirmationId, updatedOrder) {
        const order = await order_dto_1.default.findOneAndUpdate({ confirmationCode: confirmationId }, updatedOrder, { new: true }).exec();
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        return order;
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map