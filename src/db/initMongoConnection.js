import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

export function initMongoConnection() {
  const MONGODB_URI = getEnvVar('MONGODB_URI');
  return mongoose.connect(MONGODB_URI);
}
