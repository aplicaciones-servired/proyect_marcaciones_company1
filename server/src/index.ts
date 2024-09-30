import { PORT, CORS } from './config';
import express from 'express';
import logs from 'morgan';
import cors from 'cors';

const v1 = '/api/marcaciones/v1';
const app = express();

app.use(cors({ origin: CORS }));
app.use(express.json());
app.use(logs('dev'));

app.get(v1, (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

