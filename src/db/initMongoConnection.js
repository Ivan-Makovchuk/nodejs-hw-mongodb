console.log('Loaded ENV variables:', process.env.MONGODB_USER, process.env.MONGODB_URL);
import mongoose from 'mongoose';

export async function initMongoConnection() {
  try {
    const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } = process.env;
    
    if (!MONGODB_USER || !MONGODB_PASSWORD || !MONGODB_URL || !MONGODB_DB) {
      throw new Error('Missing required MongoDB environment variables');
    }

    const uri = `mongodb+srv://${encodeURIComponent(MONGODB_USER)}:${encodeURIComponent(MONGODB_PASSWORD)}@${MONGODB_URL}/${MONGODB_DB}?retryWrites=true&w=majority`;
    
    console.log('Connecting to MongoDB with URI:', uri.replace(/:[^:@]+@/, ':******@')); // Логируем без пароля

    await mongoose.connect(uri);
    console.log('Mongo connection successfully established!');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); // Завершаем процесс при ошибке подключения
  }
}