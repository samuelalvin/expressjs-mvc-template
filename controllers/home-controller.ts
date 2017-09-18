import * as express from "express";

export class HomeController {
    readonly router: express.Router;

    constructor() {
        this.router = express.Router();
        this.setupRoute();
    }

    private setupRoute(): void {
        this.router.get("/", (request, response) => {
            response.render("home/index");
        });
    }
}