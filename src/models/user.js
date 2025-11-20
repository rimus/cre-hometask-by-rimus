import { log } from '../utils/logger.js';

export class User {
  constructor(username, password) {
    log.debug(`Creating user with username = ${username} and password = ********`);
    this.username = username;
    this.password = password;
  }
}
