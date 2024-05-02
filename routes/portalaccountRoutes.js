const express = require('express');
const router = express.Router();
const portalAccountController = require('../controllers/portalAccountControllerts');

router.get('/getallAccount', portalAccountController.getAllAccounts);

module.exports = router;

