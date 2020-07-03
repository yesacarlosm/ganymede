import { Request, Response } from 'express';

export class MainController {
  healthCheck(req: Request, res: Response): Response {
    return res.status(200).send("Ganymede is alive");
  }
}