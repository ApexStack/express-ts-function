import { Request, Response } from "express";
import { fetchData } from "../services/hello.service";

const getHello = (req: Request, res: Response): void => {
  const data = fetchData();
  res.json({ message: data });
};

export { getHello };
