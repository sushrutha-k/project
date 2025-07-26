const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  receiver: { // the donor (gets notified)
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sender: { // the receiver (who claimed donation)
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  donationItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Donation',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Notification', notificationSchema);
