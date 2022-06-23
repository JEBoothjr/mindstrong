import Debug from "debug";
const debug: debug.IDebugger = Debug('mindstrong:api:condition:routes');

import express from 'express';
export const ConditionRoutes = express.Router();

import { ConditionController } from './condition.controller';
const controller = new ConditionController();

const BASE = '/conditions';

ConditionRoutes.get(`${BASE}`, async (req: express.Request, res: express.Response) => {
  debug(`GET ${BASE}`);
  debug(req.query);

  try{
    const start: string = req.query.start as string;
    const count: number = Number(req.query.count as string);

    let result = await controller.getConditions(start, count);
    res.status(200).send(result);
  }catch(err){
    debug(err);
    res.status(500).send();
  }
});

ConditionRoutes.post(`${BASE}`, async (req: express.Request, res: express.Response) => {
  debug(`POST ${BASE}`);
  debug(req.body);
  
  try{
    let result = await controller.addConditions(req.body);
    res.status(200).send(result);
  }catch(err){
    debug(err);
    res.status(500).send();
  }
})
