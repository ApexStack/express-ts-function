import express, { Application } from "express";
import HelloRoute from "./routes/hello.route";

class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  private config(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes(): void {
    this.app.use("/", HelloRoute);
  }

  public getApp(): Application {
    return this.app;
  }
}

export default new App().getApp();
