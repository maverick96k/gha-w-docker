import bodyParser from 'body-parser';
import express from 'express';

import eventRoutes from './routes/events.js';

const app = express();

app.use(bodyParser.json());

app.use(eventRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
