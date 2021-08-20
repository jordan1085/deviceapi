"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var deviceController_1 = require("../controllers/deviceController");
var router = express_1.Router();
router.get('/', deviceController_1.getDevices);
router.post('/', deviceController_1.postDevice);
router.put('/:id', deviceController_1.putDevice);
router.delete('/:id', deviceController_1.deleteDevice);
exports.default = router;
//# sourceMappingURL=device.js.map