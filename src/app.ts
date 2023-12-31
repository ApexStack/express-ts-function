import express, { Application, json, urlencoded } from "express";
import { routes } from "./routes";
import { errorMiddleWare } from "./middleware/error.middleware";
import * as dotenv from "dotenv";
import "reflect-metadata"; // For Dependency Injection

dotenv.config();

const app = express();

app.use(json());
app.use(urlencoded({ extended: false }));

app.use("/", routes);
app.use(errorMiddleWare);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
