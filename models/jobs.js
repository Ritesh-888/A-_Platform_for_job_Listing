const mongoose = require('mongoose');

const jobPostSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
  companyName: { type: String, required: true },
  jobType: { type: String, enum: ['remote', 'in-office'], required: true },
  skillsRequired:{
    type: [String], // skills is now defined as an array of strings
    required: true // skills is now required
  },
  recruiterName: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('JobPost', jobPostSchema);
