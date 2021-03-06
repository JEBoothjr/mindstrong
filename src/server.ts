import Debug from "debug";
const debug: debug.IDebugger = Debug('mindstrong:server');

import express from 'express';
import config from 'config';

import { App } from "./app";

import { jwt } from "./api/middleware/jwt";

import { RecordRoutes } from './api/record/record.routes';
import { ConditionRoutes } from './api/condition/condition.routes';
import { UserRoutes } from './api/user/user.routes';
import { HealthRoutes } from './api/health/health.routes';

const initializeApplication = async (): Promise<void> => {
  debug('initializing application...');

  const app = new App(
    config.get('server.port'),
    [
      express.json(),
      jwt
    ],
    [
      RecordRoutes,
      ConditionRoutes,
      UserRoutes,
      HealthRoutes
    ]
  );

  await app.connectToDatabase(config.get('database.uri'), config.get('database.connectionOptions'));
  app.listen();
}

const init = async (): Promise<void> => {
  debug('initializing server...');

  try {
    await initializeApplication();
  } catch (err) {
    console.error(err);
    process.exit(-1);
  }
};

init();
