import { DB_NAME, DB_HOST, DB_PASS, DB_PORT, DB_USER, DB_DIALECT } from '../config';
import { Sequelize } from 'sequelize';

const db_connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: parseInt(DB_PORT),
  dialect: DB_DIALECT === 'true' ? 'mysql' : 'mariadb',
  timezone: '-05:00'
});

export { db_connection }