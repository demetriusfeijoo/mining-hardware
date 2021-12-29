export class BaseException extends Error {
  public description: String;
  public key: String;
  public status: Number;

  constructor(description: string, key: string, status: Number = 500) {
    super(description);

    this.description = description;
    this.key = key;
    this.status = status;
  }
}
