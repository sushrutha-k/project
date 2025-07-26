// controllers/donationController.js
const Donation = require('../models/donation');

exports.createDonation = async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json({ message: 'Donation saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving donation' });
  }
};

exports.getAllDonations = async (req, res) => {
  try {
    const donations = await Donation.find();
    res.status(200).json(donations);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching donations' });
  }
};
