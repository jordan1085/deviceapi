"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var config_1 = __importDefault(require("../database/config"));
var Device = config_1.default.define('devices', {
    name: {
        type: sequelize_1.DataTypes.STRING
    }
});
exports.default = Device;
//# sourceMappingURL=devices.js.map