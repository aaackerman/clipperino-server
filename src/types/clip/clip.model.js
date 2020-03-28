import mongoose from 'mongoose';

export const clipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export const Clip = mongoose.model('clip', clipSchema);
