import { Application } from 'express';
import { MainController } from '../controllers/main.controllers';

export class MainRoutes {
  private mainController: MainController;

  constructor(private app: Application) {
    this.mainController = new MainController();
    this.routes();
  }

  public routes() {
    this.app.get('/api/health/check', this.mainController.healthCheck);
  }
}