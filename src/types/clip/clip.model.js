import mongoose from 'mongoose';

export const clipSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    url: {
      type: String,
      required: true,
      trim: true
    },
    embedUrl: {
      type: String,
      required: true,
      trim: true
    },
    broadcasterId: {
      type: Number,
      required: true
    },
    broadcasterName: {
      type: String,
      required: true,
      trim: true
    },
    creatorId: {
      type: Number,
      required: true
    },
    creatorName: {
      type: String,
      required: true,
      trim: true
    },
    videoId: {
      type: Number,
      required: false
    },
    gameId: {
      type: Number,
      required: false
    },
    clipId: {
      type: String,
      required: true,
      unique: true,
      trim: false
    },
    viewCount: {
      type: Number,
      required: true
    },
    createdAt: {
      type: String,
      required: true,
      trim: true
    },
    thumbnailUrl: {
      type: String,
      required: true,
      trim: true
    }
  },
  { timestamps: true }
);

export const Clip = mongoose.model('clip', clipSchema);
