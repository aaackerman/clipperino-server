import mongoose from 'mongoose';
import options from './config';

export default (url = options.dbUrl, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
};
