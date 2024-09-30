import { Sequelize } from 'sequelize';

const DB_NAME = process.env.DB_NAME!;
const DB_USER = process.env.DB_USER!;
const DB_PASS = process.env.DB_PASS!;
const DB_HOST = process.env.DB_HOST!;
const DB_PORT = process.env.DB_PORT!;

const db_connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: parseInt(DB_PORT),
  dialect: 'mariadb',
  timezone: '-05:00'
});

export { db_connection }