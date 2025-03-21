import { initMongoConnection } from './db/initMongoConnection.js';
import { setupServer } from './server.js';

const bootstrap = async () => {
  try {
    await initMongoConnection();
    console.log('Mongo connection successfully established!');
    await setupServer();
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

bootstrap();
