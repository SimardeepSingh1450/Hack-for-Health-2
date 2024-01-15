const express = require('express');
const router = express.Router();

//controllers imported
const {createVitalData, getLastMonthData} = require('../controllers/vitalDateController');

router.post('/create',createVitalData).get('/getLastMonthData',getLastMonthData);

module.exports = router;