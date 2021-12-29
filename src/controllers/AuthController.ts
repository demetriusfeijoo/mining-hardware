import { Request, Response } from "express";
import { AuthProvider } from "../providers/AuthProvider";

export class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await AuthProvider.authenticate(email, password);

    return res.send(token);
  }
}
