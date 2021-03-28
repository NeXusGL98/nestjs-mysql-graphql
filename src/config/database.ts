export default () => ({
  host: process.env.DB_HOST,
  db_username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DATABASE,
  port: parseInt(process.env.DB_PORT) || 3306
});