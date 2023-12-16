import { Request, Response } from "express";

class HelloController {
  static get(req: Request, res: Response): void {
    res.json({ message: "Hello, world!" });
  }
}

export default HelloController;
