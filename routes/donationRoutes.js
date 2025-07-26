const express = require('express');
const router = express.Router();
const { createDonation, getAllDonations } = require('../controllers/donationController');

// All donation routes
router.post('/food', createDonation);
router.post('/books', createDonation);
router.post('/clothes', createDonation);

// GET all donations
router.get('/', getAllDonations); // ✅ This must come BEFORE export

module.exports = router;
