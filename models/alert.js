"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
var config_1 = __importDefault(require("../database/config"));
var Alert = config_1.default.define("alerts", {
    device_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    registered_value: {
        type: sequelize_1.DataTypes.FLOAT
    },
    alert_data: {
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
exports.default = Alert;
//# sourceMappingURL=alert.js.map