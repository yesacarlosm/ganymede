import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as mongoose from "mongoose";
import config from "./config";
import { MainRoutes } from "./routes/main.routes";
import errorMiddleware from './middlewares/error.middleware';

class App {

    public app: express.Application;
    public mainRoutes: MainRoutes;

    constructor() {
        this.app = express();
        this.connectToTheDatabase();
        this.initializeMiddlewares();
        this.initializeErrorHandling();

        this.mainRoutes = new MainRoutes(this.app);
    }

    private initializeMiddlewares(): void {
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
        this.app.use(cors());
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }

    private connectToTheDatabase() {
        mongoose.Promise = global.Promise;
        mongoose.connect(config.DB_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
    }
}

export default new App().app;