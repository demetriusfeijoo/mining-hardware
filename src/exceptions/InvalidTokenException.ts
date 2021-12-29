import { BaseException } from "./BaseException";

export class InvalidTokenException extends BaseException {
  constructor() {
    super(
      "The given access token is not valid",
      "exceptions.token.invalid",
      401
    );
  }
}
