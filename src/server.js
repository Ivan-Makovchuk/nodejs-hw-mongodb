export const setupServer = async () => {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  // Добавляем обработчик для корневого маршрута "/"
  app.get('/', (req, res) => {
    res.json({ message: "API is working!" });
  });

  // Правильное подключение роутов
  app.use('/contacts', contactsRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
