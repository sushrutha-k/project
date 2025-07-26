const express = require('express');
const router = express.Router();
const { confirmDonation } = require('../controllers/confirmedDonationController');

router.post('/', confirmDonation); // POST /api/confirmed

module.exports = router;
