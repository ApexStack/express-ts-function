import { Request, Response, NextFunction } from "express";
import { logger } from "./log.middleware";

export const errorMiddleWare = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(error)
  logger.error(`Something went wrong: ${error.message || "Unknown error"}`);
  res.status(500).json({ error: "Internal Server Error, Check Log" });
};
