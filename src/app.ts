import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { MainRoutes } from "./routes/main.routes";

class App {

    public app: express.Application;
    public mainRoutes: MainRoutes;

    constructor() {
        this.app = express();
        this.setConfig();

        this.mainRoutes = new MainRoutes(this.app);
    }

    private setConfig(): void{
        this.app.use(bodyParser.json({ limit: '50mb' }));
        this.app.use(bodyParser.urlencoded({ limit: '50mb', extended:true}));
        this.app.use(cors());
    }

}

export default new App().app;