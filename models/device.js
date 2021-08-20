"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var config_1 = __importDefault(require("../database/config"));
var Device = config_1.default.define("devices", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    alert_config: {
        type: sequelize_1.DataTypes.JSON
    },
    createdAt: {
        field: "createdAt",
        type: sequelize_1.DataTypes.DATE,
    },
    updatedAt: {
        field: "updatedAt",
        type: sequelize_1.DataTypes.DATE,
    },
});
exports.default = Device;
//# sourceMappingURL=device.js.map