import Debug from "debug";
const debug: debug.IDebugger = Debug('mindstrong:api:middleware:auth');

import express from 'express';

import { UserModel } from '../user/user.model';
import { AuthRequest } from './auth.request';

// This simulates obtaining the user from the JWT
export async function jwt(req: AuthRequest, res: express.Response, next: express.NextFunction) {
  // Get the user Id from the JWT and verify
  // For this example, there is no JWT, so we'll just fetch the only user in the DB
  // and pretend...
  let user = await UserModel.findOne({});

  debug(`User: ${user}`);

  req.user = user;
  next();
}
