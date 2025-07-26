const mongoose = require('mongoose');

const confirmedDonationSchema = new mongoose.Schema({
  type: String,
  name: String,
  phone: String,
  address: String,
  category: String,
  quantity: Number,
  pickupTime: String,
  date: String,
});

module.exports = mongoose.model('ConfirmedDonation', confirmedDonationSchema);
