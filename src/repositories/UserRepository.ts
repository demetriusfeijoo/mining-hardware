import { Prisma } from "../Prisma";

export class UserRepository {
  static async findByEmailAndPwd(email: string, password: string) {
    const user = await Prisma.getInstance().user.findFirst({
      where: {
        email: email,
        password: password,
        active: 1,
      },
    });

    return user;
  }
}
