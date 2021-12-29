import { Request, Response, Router } from "express";
import { AuthController } from "../controllers/AuthController";

const router = Router();

router.post("/authenticate", (req: Request, res: Response) =>
  new AuthController().authenticate(req, res)
);

export default router;
