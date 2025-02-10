import sequelize from '../config/database';

export const databaseLoader = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
};
