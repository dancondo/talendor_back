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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthcheckController = void 0;
const common_1 = require("@nestjs/common");
const healthcheck_response_dto_1 = require("./dto/healthcheck.response.dto");
const swagger_1 = require("@nestjs/swagger");
let HealthcheckController = class HealthcheckController {
    getHealthCheck() {
        return { message: 'API working properly!' };
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiTags)('healthcheck'),
    (0, swagger_1.ApiResponse)({
        status: 200,
        type: healthcheck_response_dto_1.HealthCheckResponseDTO,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", healthcheck_response_dto_1.HealthCheckResponseDTO)
], HealthcheckController.prototype, "getHealthCheck", null);
HealthcheckController = __decorate([
    (0, common_1.Controller)('healthcheck')
], HealthcheckController);
exports.HealthcheckController = HealthcheckController;
//# sourceMappingURL=healthcheck.controller.js.map