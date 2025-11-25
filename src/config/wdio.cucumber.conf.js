import { config as baseConfig } from './wdio.base.conf.js';
import deepmerge from 'deepmerge';
import log from '../utils/logger.js';

/**
 * Cucumber-specific configuration
 * Extends base configuration with Cucumber framework settings
 */
export const config = deepmerge(baseConfig, {
  // ==================
  // Specify Test Files
  // ==================
  specs: ['../../tests/features/**/*.feature'],

  exclude: [
    // Add patterns to exclude specific feature files
  ],

  // =========
  // Framework
  // =========
  framework: 'cucumber',

  // ===============
  // Cucumber Options
  // ===============
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ['./src/steps/**/*.steps.js'],

    // <boolean> show full backtrace for errors
    backtrace: false,

    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE
    requireModule: [],

    // <boolean> invoke formatters without executing steps
    dryRun: false,

    // <boolean> abort the run on first failure
    failFast: false,

    // <boolean> hide step definition snippets for pending steps
    snippets: true,

    // <boolean> hide source uris
    source: true,

    // <boolean> fail if there are any undefined or pending steps
    strict: false,

    // <string> (expression) only execute the features or scenarios with tags matching the expression
    // Examples: 
    // - Run only @positive tests: '@positive'
    // - Run @login but not @negative: '@login and not @negative'
    tagExpression: '',

    // <number> timeout for step definitions
    timeout: 60000,

    // <boolean> Enable this config to treat undefined definitions as warnings
    ignoreUndefinedDefinitions: false,

    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE
    format: [
      'pretty',
      // JSON report for better integration with CI/CD
      ['json', 'reports/cucumber-report.json']
    ],

    // <string[]> Only execute the scenarios with name matching the expression
    name: []
  },

  // =====
  // Hooks
  // =====

  /**
   * Runs before a Cucumber Feature
   */
  beforeFeature: function (uri, feature) {
    log.info(`\n📄 Starting feature: ${feature.name}`);
  },

  /**
   * Runs before a Cucumber Scenario
   */
  beforeScenario: function (world, context) {
    const { pickle } = world;
    log.info(`\n🔹 Running scenario: ${pickle.name}`);
  },

  /**
   * Runs after a Cucumber Scenario
   */
  afterScenario: function (world, result, context) {
    const { pickle } = world;
    const status = result.passed ? '✅' : '❌';
    log.info(`${status} Scenario completed: ${pickle.name} (${result.duration}ms)`);
  },

  /**
   * Runs after a Cucumber Feature
   */
  afterFeature: function (uri, feature) {
    log.info(`\n✅ Feature completed: ${feature.name}`);
  }
});
