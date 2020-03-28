import { Clip } from './clip.model';
import mongoose from 'mongoose';

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

export default {
  Query: {
    clip,
    clips
  },
  Clip: {
    __resolveType(clip) {}
  }
};
