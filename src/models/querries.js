import mongoose from 'mongoose';

const emailSchema = new mongoose.Schema({
  to: {
    type: String,
    default:'fistonalvin@gmail.com'
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const Email = mongoose.model('Email', emailSchema);

export default Email;
