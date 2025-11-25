import { config as baseConfig } from './wdio.base.conf.js';
import deepmerge from 'deepmerge';
import log from '../utils/logger.js';

/**
 * Mocha-specific configuration
 * Extends base configuration with Mocha framework settings
 */
export const config = deepmerge(baseConfig, {
  // ==================
  // Specify Test Files
  // ==================
  specs: ['../../tests/specs/**/*.spec.js'],

  exclude: [
    // Add patterns to exclude specific test files
  ],

  // =========
  // Framework
  // =========
  framework: 'mocha',

  // =============
  // Mocha Options
  // =============
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },

  // =====
  // Hooks
  // =====

  /**
   * Hook that gets executed before the suite starts
   */
  beforeSuite: function (suite) {
    log.info(`\n📦 Starting suite: ${suite.title}`);
  },

  /**
   * Function to be executed before a test (in Mocha/Jasmine) starts
   */
  beforeTest: function (test, context) {
    log.info(`\n🧪 Running test: ${test.title}`);
  },

  /**
   * Hook that gets executed after the suite has ended
   */
  afterSuite: function (suite) {
    log.info(`\n✅ Suite completed: ${suite.title}`);
  }
});
