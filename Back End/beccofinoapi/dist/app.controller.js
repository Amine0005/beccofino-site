"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const crypto = require("crypto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async orderController(order) {
        common_1.Logger.debug(order);
        const confirmationCode = generateHash(order);
        return this.appService.handleSingleOrder(order, confirmationCode);
    }
    getOrder(confirmationId) {
        return this.appService.getOrder(confirmationId);
    }
    deleteOrder(confirmationId) {
        return this.appService.deleteOrder(confirmationId);
    }
    updateOrder(confirmationId, updatedOrder) {
        return this.appService.updateOrder(confirmationId, updatedOrder);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Post)("sendorder"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "orderController", null);
__decorate([
    (0, common_1.Get)('orders/get/:confirmationId'),
    __param(0, (0, common_1.Param)('confirmationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getOrder", null);
__decorate([
    (0, common_1.Delete)('orders/delete/:confirmationId'),
    __param(0, (0, common_1.Param)('confirmationId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "deleteOrder", null);
__decorate([
    (0, common_1.Put)('orders/update/:confirmationId'),
    __param(0, (0, common_1.Param)('confirmationId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateOrder", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
function generateHash(data) {
    const hash = crypto.createHash('sha256');
    hash.update(JSON.stringify(data));
    return hash.digest('hex');
}
//# sourceMappingURL=app.controller.js.map