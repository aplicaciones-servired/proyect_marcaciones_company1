import { PORT, CORS } from './config';
import express from 'express';
import logs from 'morgan';
import cors from 'cors';

import { marcacionRouter } from './routes/marcacion.routes';
import { opcionesRouter } from './routes/opciones.routes';
import { personaRouter } from './routes/persona.routes';
import { infoRoutes } from './routes/info.routes';
import { db_connection } from './connections';

const v1 = '/api/marcaciones/v1';
const app = express();

app.use(cors({ origin: CORS, credentials: true }));
app.use(express.json());
app.use(logs('dev'));

app.use(v1, infoRoutes);
app.use(v1, marcacionRouter);
app.use(v1, opcionesRouter);
app.use(v1, personaRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

db_connection.authenticate()
  .then(() => console.log('Database connection has been established successfully.'))
  .catch((error) => console.error('Unable to connect to the database:', error.message));