import express from 'express';
export const HealthRoutes = express.Router();

import { HealthController } from './health.controller';

const BASE = '/health';
const controller = new HealthController();

HealthRoutes.get(`${BASE}`, (req: express.Request, res: express.Response) => {
  res.status(200).send({ status: controller.getStatus() });
});
