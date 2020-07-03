import { Request, Response } from 'express';
import * as mongoose from "mongoose";

export class MainController {
  getConnectionStateString(state: number) {
    let states = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting'
    }
    return states[state];
  }

  healthCheck = (req: Request, res: Response) => {
    let dbState = this.getConnectionStateString(mongoose.connection.readyState);
    return res.status(200).send(`Service is alive, db connection: ${dbState}`);
  }
}