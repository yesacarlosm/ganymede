import { Request, Response } from 'express';
import * as mongoose from "mongoose";
import { getDatabaseStatusParsed } from "../utils/utils";

export class MainController {

  healthCheck = (req: Request, res: Response) => {
    return res.status(200).send(`Ganymede is alive, db connection: ${getDatabaseStatusParsed(mongoose.connection.readyState)}`);
  }
}