import express from 'express';
import routes from './routes';
import log from './logger';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  log.info(`Recipe API listening on port ${PORT}`);
});
