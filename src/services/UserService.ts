import { UserRepository } from "../repositories/UserRepository";
import crypto from "crypto";

export class UserService {
  static async findByEmailAndPwd(email: string, password: string) {
    const encryptedPwd = crypto
      .createHash("md5")
      .update(password)
      .digest("hex");

    return await UserRepository.findByEmailAndPwd(email, encryptedPwd);
  }
}
