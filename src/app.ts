import express, { Application } from "express";
import { routes } from "./routes";
import { errorMiddleWare } from "./middleware/error.middleware";
import * as dotenv from 'dotenv';
dotenv.config();
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
    this.app.use("/", routes);
    this.app.use(errorMiddleWare);
  }

  public getApp(): Application {
    return this.app;
  }
}

export default new App().getApp();
