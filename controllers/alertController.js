"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAlert = exports.alertSimulation = exports.getAlertsDevice = exports.getAlerts = void 0;
var device_1 = __importDefault(require("../models/device"));
var alert_1 = __importDefault(require("../models/alert"));
// GET ALL ALERTS
var getAlerts = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var alerts, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, alert_1.default.findAll()];
            case 1:
                alerts = _a.sent();
                res.json({
                    alerts: alerts
                });
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                res.status(404).json({
                    msg: 'Error al optener alertas'
                });
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getAlerts = getAlerts;
// GET ALERT BY DEVICE
var getAlertsDevice = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, alerts, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, alert_1.default.findAll({
                        where: {
                            device_id: id
                        }
                    })];
            case 2:
                alerts = _a.sent();
                res.json({
                    alerts: alerts
                });
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.status(404).json({
                    msg: 'Error al optener alertas'
                });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getAlertsDevice = getAlertsDevice;
// SIMULATION ALERT
var alertSimulation = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var alertValue, id, alert, device, _a, type, name_1, value, min, max, alert_2, alert_3, error_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                alert = req.body.alert;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 7, , 8]);
                return [4 /*yield*/, device_1.default.findByPk(id)];
            case 2:
                device = _b.sent();
                _a = device.alert_config, type = _a.type, name_1 = _a.name, value = _a.value, min = _a.min, max = _a.max;
                alertValue = Number(alert);
                if (!(type === "POR_VALOR")) return [3 /*break*/, 4];
                if (!(value !== alertValue)) return [3 /*break*/, 4];
                alert_2 = new alert_1.default({
                    device_id: id,
                    registered_value: alertValue,
                    alert_data: {
                        name: name_1,
                        type: type,
                        value: value,
                    }
                });
                return [4 /*yield*/, alert_2.save()];
            case 3:
                _b.sent();
                res.json({
                    alert: alert_2
                });
                _b.label = 4;
            case 4:
                if (!(type === "FUERA_DE_RANGO")) return [3 /*break*/, 6];
                if (!(min > alertValue || max < alertValue)) return [3 /*break*/, 6];
                alert_3 = new alert_1.default({
                    device_id: id,
                    registered_value: alertValue,
                    alert_data: {
                        name: name_1,
                        type: type,
                        min: min,
                        max: max
                    }
                });
                return [4 /*yield*/, alert_3.save()];
            case 5:
                _b.sent();
                res.json({
                    alert: alert_3.alert_data.name
                });
                _b.label = 6;
            case 6: return [3 /*break*/, 8];
            case 7:
                error_3 = _b.sent();
                res.status(500).json({
                    msg: 'Error al crear alerta'
                });
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.alertSimulation = alertSimulation;
// DELETE ALERT
var deleteAlert = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, alert_4, error_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 4, , 5]);
                return [4 /*yield*/, alert_1.default.findByPk(id)];
            case 2:
                alert_4 = _a.sent();
                return [4 /*yield*/, alert_4.destroy()];
            case 3:
                _a.sent();
                res.json({
                    alert: alert_4
                });
                return [3 /*break*/, 5];
            case 4:
                error_4 = _a.sent();
                res.status(500).json({
                    msg: 'Error al eliminar una alerta'
                });
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
exports.deleteAlert = deleteAlert;
//# sourceMappingURL=alertController.js.map