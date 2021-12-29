import { Request, Response } from "express";
import { AuthProvider } from "../providers/AuthProvider";

export async function authorize(req: Request, res: Response, next: any) {
  const token = req.header("x-api-key") || "";

  try {
    AuthProvider.verifyToken(token);
    return next();
  } catch (err: any) {
    return res.status(err.status || 401).send(err.key || "forbidden");
  }
}
