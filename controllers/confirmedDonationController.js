const ConfirmedDonation = require('../models/confirmedDonation');

const confirmDonation = async (req, res) => {
  try {
    const donation = new ConfirmedDonation(req.body);
    await donation.save();
    res.status(201).json({ message: 'Donation confirmed' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to confirm donation' });
  }
};

module.exports = { confirmDonation };
