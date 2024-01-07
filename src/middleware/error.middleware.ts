import { Request, Response, NextFunction } from "express";
import { logger } from "./log.middleware";

export const errorMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(500).json({ error: "Internal Server Error, Check Route" });
};
