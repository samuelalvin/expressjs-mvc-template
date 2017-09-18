import { Express } from "express";
import * as path from "path";
import * as vash from "vash";
import { HomeController } from "./controllers/home-controller";

export class MvcService {
    constructor(private app: Express) {
    }

    addMVC(): void {
        this.initializeViews();
        this.initializeControllers();
    }

    private initializeViews(): void {
        this.app.set("view engine", "vash");
        this.app.set("views", path.join(__dirname, "views"));
    }

    private initializeControllers(): void {
        this.app.use("/", new HomeController().router);
    }
}