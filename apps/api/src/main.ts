/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import { MessagePath, ApiResponse, SharedPath } from '@nrwlpoc/app-helpers';

const app = express();

const cors = {
  origin: ["http://localhost:4200","http://localhost:4201"]
}

app.all('*', function(req, res, next) {
  const origin = req.headers.origin as string;
  if(cors.origin.indexOf(origin) >= 0){
      res.header("Access-Control-Allow-Origin", origin);
  }
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get(MessagePath, (req, res) => {
  res.send({ message: 'Welcome to Express!' } as ApiResponse);
});

app.get(SharedPath + '/:id', (req, res) => {
  res.send({ message: req.params.id + ' Saved Successfully'} as ApiResponse);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
