"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var alertController_1 = require("../controllers/alertController");
var router = express_1.Router();
router.get('/', alertController_1.getAlerts);
router.get('/:id', alertController_1.getAlertsDevice);
router.post('/:id', alertController_1.alertSimulation);
router.delete('/:id', alertController_1.deleteAlert);
exports.default = router;
//# sourceMappingURL=alert.js.map