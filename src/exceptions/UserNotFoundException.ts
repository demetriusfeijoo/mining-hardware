import { BaseException } from "./BaseException";

export class UserNotFoundException extends BaseException {
  constructor() {
    super("User not found in our system", "exception.user.notfound", 404);
  }
}
