import express from 'express';
import { routes } from './routes';
import cors from 'cors';

const port = 3333
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.port || port, () => {
  console.log(`HTTP server running in port ${port}!`);
});