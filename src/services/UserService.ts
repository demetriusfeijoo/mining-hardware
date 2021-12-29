import { UserRepository } from "../repositories/UserRepository";
import crypto from "crypto";

export class UserService {
  static async findByEmailAndPwd(email: string, password: string) {
    password = crypto.createHash("md5").update(password).digest("hex");

    return await UserRepository.findByEmailAndPwd(email, password);
  }
}
