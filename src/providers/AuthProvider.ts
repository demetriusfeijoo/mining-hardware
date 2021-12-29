import { UserService } from "../services/UserService";
import jwt from "jsonwebtoken";
import { UserNotFoundException } from "../exceptions/UserNotFoundException";
import { InvalidTokenException } from "../exceptions/InvalidTokenException";

export class AuthProvider {
  static async authenticate(email: string, password: string): Promise<String> {
    const user = await UserService.findByEmailAndPwd(email, password);

    if (!user) throw new UserNotFoundException();

    const secret = process.env.TOKEN_SECRET || "";

    const token = jwt.sign(
      {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      },
      secret
    );

    return `Bearer ${token}`;
  }

  static async verifyToken(token: string): Promise<any> {
    try {
      const secret = process.env.TOKEN_SECRET || "";
      return jwt.verify(token, secret);
    } catch {
      throw new InvalidTokenException();
    }
  }
}
