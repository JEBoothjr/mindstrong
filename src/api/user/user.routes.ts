import Debug from "debug";
const debug: debug.IDebugger = Debug('mindstrong:api:user:routes');

import express from 'express';
export const UserRoutes = express.Router();

import { UserController } from './user.controller';
const controller = new UserController();

const BASE = '/users';

UserRoutes.post(`${BASE}`, async (req: express.Request, res: express.Response) => {
  debug(`POST ${BASE}`);
  debug(req.body);

  try{
    let result = await controller.addUsers(req.body);
    res.status(200).send(result);
  }catch(err){
    debug(err);
    res.status(500).send();
  }
});
