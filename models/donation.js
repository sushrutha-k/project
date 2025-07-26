const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  type: String,               // e.g. Food
  name: String,
  phone: String,
  address: String,
  category: String,           // e.g. Cooked / Packaged
  description: String,
  quantity: Number,
  bestBefore: String,
  pickupTime: String,
  date: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Donation', donationSchema);
