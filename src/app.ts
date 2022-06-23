import Debug from "debug";
const debug: debug.IDebugger = Debug('mindstrong:app');

import express from 'express';
import { connect } from 'mongoose';

export class App {
  public app: express.Application;

  constructor(private port: number, middleware: Array<any>, routes: Array<express.Router>){
    this.app = express();
    this.addMiddleware(middleware);
    this.addRoutes(routes);
  }

  public addMiddleware(middleware: any[]) {
    debug('Adding middleware...');

    middleware.forEach((m) => {
      this.app.use(m);
    });
  }

  private addRoutes(routes: Array<express.Router>) {
    debug('Adding routes...');

    routes.forEach((r) => {
      this.app.use(r);
    });
  }

  public async connectToDatabase(uri:string, options:any){
    debug('Connecting to database...');

    try {
      await connect(uri, options);
    } catch (err) {
      throw err;
    }
    debug('Database is connected...');
  }

  public listen() {
    this.app.listen(this.port, () => {
      debug(`Listening on: ${this.port}`);
    });
  }
}