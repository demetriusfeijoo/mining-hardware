import { BaseException } from "./BaseException";

export class TokenSecretNotDefinedException extends BaseException {
  constructor() {
    super(
      "Sorry, but we are facing some issues, please try again later on.",
      "exception.server.env",
      500
    );
  }
}
