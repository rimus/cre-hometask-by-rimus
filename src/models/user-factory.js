import { User } from './user.js';
import { log } from '../utils/logger.js';

const Usernames = {
  STANDARD: 'standard_user',
  LOCKED_OUT: 'locked_out_user',
  PROBLEM: 'problem_user',
  PERFORMANCE_GLITCH: 'performance_glitch_user',
  ERROR: 'error_user',
  VISUAL: 'visual_user',
};

export const DEFAULT_PASSWORD = 'secret_sauce';

export class UserFactory {
  static getStandardUser() {
    const username = Usernames.STANDARD;
    log.info(`Creating ${username.replaceAll('_', ' ')} for Sauce Labs Demo App`);
    return new User(username, DEFAULT_PASSWORD);
  }

  static getLockedOutUser() {
    const username = Usernames.LOCKED_OUT;
    log.info(`Creating ${username.replaceAll('_', ' ')} for Sauce Labs Demo App`);
    return new User(username, DEFAULT_PASSWORD);
  }

  static getProblemUser() {
    const username = Usernames.PROBLEM;
    log.info(`Creating ${username.replaceAll('_', ' ')} for Sauce Labs Demo App`);
    return new User(username, DEFAULT_PASSWORD);
  }

  static getPerformanceGlitchUser() {
    const username = Usernames.PERFORMANCE_GLITCH;
    log.info(`Creating ${username.replaceAll('_', ' ')} for Sauce Labs Demo App`);
    return new User(username, DEFAULT_PASSWORD);
  }

  static getErrorUser() {
    const username = Usernames.ERROR;
    log.info(`Creating ${username.replaceAll('_', ' ')} for Sauce Labs Demo App`);
    return new User(username, DEFAULT_PASSWORD);
  }

  static getVisualUser() {
    const username = Usernames.VISUAL;
    log.info(`Creating ${username.replaceAll('_', ' ')} for Sauce Labs Demo App`);
    return new User(username, DEFAULT_PASSWORD);
  }

  static getAllUsers() {
    log.info('Creating user list for Sauce Labs Demo App');
    const users = [];
    for (const username of Usernames) {
      log.info(`Creating ${username.replaceAll('_', ' ')} for Sauce Labs Demo App`);
      users.push(new User(username, DEFAULT_PASSWORD));
      log.info(`${username.replaceAll('_', ' ')} pushed to user list`);
    }
    return users;
  }
}
