import { PORT } from './config';
import express from 'express';

const v1 = '/api/marcaciones/v1';
const app = express();

app.get(v1, (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

