import { Clip } from './clip.model';
import mongoose from 'mongoose';

// https://api.twitch.tv/helix/clips?broadcaster_id=153753737&first=1

const clip = (_, args) => {
  return Clip.findById(args.id)
    .lean()
    .exec();
};

const clips = (_, args) => {
  return Clip.find({})
    .lean()
    .exec();
};

const newClip = (_, args, ctx) => {
  return Clip.create({ ...args.input });
};

const removeClips = (_, args) => {
  return Clip.remove({});
};

export default {
  Query: {
    clip,
    clips
  },
  Mutation: {
    newClip,
    removeClips
  },
  Clip: {
    __resolveType(clip) {}
  }
};
