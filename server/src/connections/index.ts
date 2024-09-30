import { Sequelize } from 'sequelize';

const DB_NAME = process.env.DB_NAME! as string;
const DB_USER = process.env.DB_USER! as string;
const DB_PASS = process.env.DB_PASS! as string;
const DB_HOST = process.env.DB_HOST! as string;
const DB_PORT = process.env.DB_PORT! as string;

console.log(DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT);


const db_connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: parseInt(DB_PORT),
  dialect: 'mariadb',
  timezone: '-05:00'
});

export { db_connection }