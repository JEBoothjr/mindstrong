import Debug from "debug";
const debug: debug.IDebugger = Debug('mindstrong:api:record:routes');

import express from 'express';
export const RecordRoutes = express.Router();

import { RecordController } from './record.controller';
const controller = new RecordController();

const BASE = '/records';

RecordRoutes.get(`${BASE}`, async (req: express.Request, res: express.Response) => {
  debug(`GET ${BASE}`);
  debug(req.query);

  try{
    const start: string = req.query.start as string;
    const count: number = Number(req.query.count as string);

    let result = await controller.getRecords(start, count);
    res.status(200).send(result);
  }catch(err){
    debug(err);
    res.status(500).send();
  }
});

RecordRoutes.post(`${BASE}`, async (req: express.Request, res: express.Response) => {
  debug(`POST ${BASE}`);
  debug(req.body);

  try{
    let result = await controller.addRecords(req.body);
    res.status(200).send(result);
  }catch(err){
    debug(err);
    res.status(500).send();
  }
});

RecordRoutes.post(`${BASE}/:recordId/conditions`, async (req: express.Request, res: express.Response) => {
  debug(`POST ${BASE}/${req.params.recordId}/conditions`);
  debug(req.body);

  try{
    let result = await controller.addConditions(req.params.recordId, req.body);
    res.status(200).send(result);
  }catch(err){
    debug(err);
    res.status(500).send();
  }
});
