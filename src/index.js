import dotenv from 'dotenv';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');
console.log('Loading .env from:', envPath);
dotenv.config({ path: envPath });

console.log('Loaded ENV variables:', process.env.MONGODB_USER, process.env.MONGODB_PASSWORD, process.env.MONGODB_URL, process.env.MONGODB_DB);

import { setupServer } from './server.js';
import { initMongoConnection } from './db/initMongoConnection.js';

(async () => {
  try {
    await initMongoConnection();
    setupServer();
  } catch (error) {
    console.error('Error initializing application:', error);
    process.exit(1);
  }
})();